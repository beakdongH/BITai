// Firebase SDK 불러오기
const firebase = require('firebase/app');
require('firebase/database');

// Firebase 구성 정보 가져오기
const firebaseConfig = require('./firebase.json');

// Firebase 초기화
firebase.initializeApp(firebaseConfig);