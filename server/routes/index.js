var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var firebase = require("firebase");

// var serviceAccount = require("path/to/serviceAccountKey.json");

firebase.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://treehacks20.firebaseio.com"
});

// var db;
var ref = firebase.app().database().ref();
//   ref.once('value')
//   .then(function (snap) {
//   // console.log('snap.val()', snap.val());
//   db = snap.val();
// });

router.options('/', function(req, res, next) {
  const testData = req.body;
  const { spawn } = require('child_process');
  var pyProg;
  ref.once('value')
  .then(function (snap) {
    
    
    const testStr = JSON.stringify(testData);
    const snapStr = JSON.stringify(snap.val());
    // console.log(testStr);
    // console.log("\n");
    // console.log(snapStr);

    pyProg = spawn('python', ['./ml/test.py', testStr, snapStr]);

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', '*');
    res.set('Access-Control-Allow-Headers', '*');

    pyProg.stdout.on('data', function(data) {
      console.log(data.toString());
    })

    res.json({
      tests: ["test1", "test2", "test3", "test4"]
    })
  });
  

  
  // res.set('Content-Type', 'text/plain');

  // console.log(JSON.stringify(testData));
  // var userRef = ref.push(testData);
  // var userRefKey = userRef.key;

  // console.log(userRefKey);

  // var dbusers;
  // ref.on('value', function (snap) {
  //   dbusers = snap.val();
    // console.log(dbusers);
  // });

  // pyProg.stdout.on('data', function(data) {

    // console.log(data.toString());
    // res.render('index', { title: data.toString() });

    // res.write(data.toString());
    // res.end('end');
    // res.json({
    //   tests: ["test1", "test2", "test3", "test4"]
    // })



  // });
})

module.exports = router;
