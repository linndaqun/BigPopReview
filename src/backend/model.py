import tensorflow as tf
def loss_function(real, pred):
    """
    We redefine our own loss function in order to get rid of the '0' value
    which is the one used for padding. This to avoid that the model optimize itself
    by predicting this value because it is the padding one.
    
    :param real: the truth
    :param pred: predictions
    :return: a masked loss where '0' in real (due to padding)
                are not taken into account for the evaluation
    """

    # to check that pred is numric and not nan
    mask = tf.math.logical_not(tf.math.equal(real, 0))
    loss_object_ = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True,
                                                                 reduction='none')
    loss_ = loss_object_(real, pred)
    mask = tf.cast(mask, dtype=loss_.dtype)
    loss_ *= mask

    return tf.reduce_mean(loss_)

def build_model(hp, max_len, item_vocab_size):
    """
    Build a model given the hyper-parameters with item and nb_days input features
    :param hp: (kt.HyperParameters) hyper-parameters to use when building this model
    :return: built and compiled tensorflow model 
    """
    inputs = {}
    inputs['item_id'] = tf.keras.Input(batch_input_shape=[None, max_len],
                                       name='item_id', dtype=tf.int32)
    # create encoding padding mask
    encoding_padding_mask = tf.math.logical_not(tf.math.equal(inputs['item_id'], 0))

    # nb_days bucketized
    inputs['nb_days'] = tf.keras.Input(batch_input_shape=[None, max_len],
                                       name='nb_days', dtype=tf.int32)

    # Pass categorical input through embedding layer
    # with size equals to tokenizer vocabulary size
    # Remember that vocab_size is len of item tokenizer + 1
    # (for the padding '0' value)
    
    embedding_item = tf.keras.layers.Embedding(input_dim=item_vocab_size,
                                               output_dim=hp.get('embedding_item'),
                                               name='embedding_item'
                                              )(inputs['item_id'])
    # nbins=100, +1 for zero padding
    embedding_nb_days = tf.keras.layers.Embedding(input_dim=100 + 1,
                                                  output_dim=hp.get('embedding_nb_days'),
                                                  name='embedding_nb_days'
                                                 )(inputs['nb_days'])

    #  Concatenate embedding layers
    concat_embedding_input = tf.keras.layers.Concatenate(
     name='concat_embedding_input')([embedding_item, embedding_nb_days])

    concat_embedding_input = tf.keras.layers.BatchNormalization(
     name='batchnorm_inputs')(concat_embedding_input)
    
    # LSTM layer
    rnn = tf.keras.layers.LSTM(units=hp.get('rnn_units_cat'),
                                   return_sequences=True,
                                   stateful=False,
                                   recurrent_initializer='glorot_normal',
                                   name='LSTM_cat'
                                   )(concat_embedding_input)

    rnn = tf.keras.layers.BatchNormalization(name='batchnorm_lstm')(rnn)

    # Self attention so key=value in inputs
    att = tf.keras.layers.Attention(use_scale=False, causal=True,
                                    name='attention')(inputs=[rnn, rnn],
                                                      mask=[encoding_padding_mask,
                                                            encoding_padding_mask])

    # Last layer is a fully connected one
    output = tf.keras.layers.Dense(item_vocab_size, name='output')(att)

    model = tf.keras.Model(inputs, output)

    model.compile(
        optimizer=tf.keras.optimizers.Adam(hp.get('learning_rate')),
        loss=loss_function,
        metrics=['sparse_categorical_accuracy'])
    