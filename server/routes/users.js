var express = require('express');
var router = express.Router();

// var serviceAccount = require("path/to/serviceAccountKey.json");

// firebase.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: "https://treehacks20.firebaseio.com"
// });

// var ref = firebase.app().database().ref();

/* GET users listing. */
router.options('/', function(req, res, next) {
  // const testData = req.body;
  // var userRef = ref.push(testData);

  // res.set('Access-Control-Allow-Origin', '*');
  // res.set('Access-Control-Allow-Methods', '*');
  // res.set('Access-Control-Allow-Headers', '*');

  console.log(req.body);

  res.end('end');
});

module.exports = router;
