import tensorflow as tf

def create_train_tfdata(train_feat_dict, train_target_tensor,
                        batch_size, buffer_size=None):
    """
    Create train tf dataset for model train input
    :param train_feat_dict: dict, containing the features tensors for train data
    :param train_target_tensor: np.array(), the training TARGET tensor
    :param batch_size: (int) size of the batch to work with
    :param buffer_size: (int) Optional. Default is None. Size of the buffer
    :return: (tuple) 1st element is the training dataset,
                     2nd is the number of steps per epoch (based on batch size)
    """
    if buffer_size is None:
        buffer_size = batch_size*50

    train_steps_per_epoch = len(train_target_tensor) // batch_size

    train_dataset = tf.data.Dataset.from_tensor_slices((train_feat_dict,
                                                        train_target_tensor)).cache()
    train_dataset = train_dataset.shuffle(buffer_size).batch(batch_size)
    train_dataset = train_dataset.repeat().prefetch(tf.data.experimental.AUTOTUNE)
    
    return train_dataset, train_steps_per_epoch
  
train_feat_dict = {'item_id': train_dict['item_id'],
                    'rating': train_dict['rating']}
train_target_tensor = train_dict['target']

train_dataset, train_steps_per_epoch = create_train_tfdata(train_feat_dict,
                                                            train_target_tensor,
                                                            batch_size=512)
  