import tensorflow as tf

def fit_model(model, train_dataset, steps_per_epoch, epochs):
    """
    Fit the Keras model on the training dataset for a number of given epochs
    :param model: tf model to be trained
    :param train_dataset: (tf.data.Dataset object) the training dataset
                          used to fit the model
    :param steps_per_epoch: (int) Total number of steps (batches of samples) before 
                            declaring one epoch finished and starting the next epoch.
    :param epochs: (int) the number of epochs for the fitting phase
    :return: tuple (mirrored_model, history) with trained model and model history
    """
    
    # mirrored_strategy allows to use multi GPUs when available
    mirrored_strategy = tf.distribute.experimental.MultiWorkerMirroredStrategy(
        tf.distribute.experimental.CollectiveCommunication.AUTO)
    
    with mirrored_strategy.scope():
        mirrored_model = model

    history = mirrored_model.fit(train_dataset,
                                 steps_per_epoch=steps_per_epoch,
                                 epochs=epochs, verbose=2)

    return mirrored_model, history