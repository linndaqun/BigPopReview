const mobilenet = require('@tensorflow-models/mobilenet');
const tf = require('@tensorflow/tfjs');
const knnClassifier = require('@tensorflow-models/knn-classifier');
global.fetch = require('node-fetch');

const classifier = knnClassifier.create();
const webcamElement = document.getElementById('webcam');
let net;
const train_data = [
    'https://www.cleaneatingwithkids.com/wp-content/uploads/2021/01/how-to-make-a-cheese-and-bacon-omelette--500x500.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPyuzNddb8kzlyt7G55CQMBbcd2ADZ3vcCw&usqp=CAU',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/9/4/0/0132293_Artichoke-Spinach-Dip_s4x3.jpg.rend.hgtvcom.616.462.suffix/1390503632247.jpeg',
    'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps40469__SD143206B04_02_5b.jpg',
];

async function app() {
    console.log('Loading mobilenet..');

    // Load the model.
    net = await mobilenet.load();
    console.log('Successfully loaded model');

    // Create an object from Tensorflow.js data API which could capture image
    // from the web camera as Tensor.
    const webcam = await tf.data.webcam(webcamElement);

    // Reads an image from the webcam and associates it with a specific class
    // index.
    const addExample = () => {
        for (let i = 0; i < 4; i++) {
            const img = train_data[i];
            // Get the intermediate activation of MobileNet 'conv_preds' and pass that
            // to the KNN classifier.
            const activation = net.infer(img, true);

            // Pass the intermediate activation to the classifier.
            classifier.addExample(activation, i);

            // Dispose the tensor to release the memory.
            img.dispose();
        }
    };

    addExample();

    for (;;) {
        if (classifier.getNumClasses() > 0) {
            const img = await webcam.capture();

            // Get the activation from mobilenet from the webcam.
            const activation = net.infer(img, 'conv_preds');
            // Get the most likely class and confidence from the classifier module.
            const result = await classifier.predictClass(activation);

            const classes = ['A', 'B', 'C', 'D'];
            document.getElementById('console').innerText = `
                prediction: ${classes[result.label]}\n
                probability: ${result.confidences[result.label]}
            `;

            // Dispose the tensor to release the memory.
            img.dispose();
        }

        await tf.nextFrame();
    }
}

export default {
    name: 'Dashboard',
    methods: {
        food_classify: function(){
            app();
        }
    }
};