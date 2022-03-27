import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: 'AIzaSyBOdxcQDLRWjxE3etbk77KyCJBCdQiyrew',
    authDomain: 'bigpopreview-30c8a.firebaseapp.com',
    databaseURL: 'https://bigpopreview-30c8a-default-rtdb.firebaseio.com',
    projectId: 'bigpopreview-30c8a',
    storageBucket: 'bigpopreview-30c8a.appspot.com',
    messagingSenderId: '1070920407966',
    appId: '1:1070920407966:web:4920000e8c671c75dbd48f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
