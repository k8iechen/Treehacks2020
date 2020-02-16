var express = require('express');
var router = express.Router();


router.options('/', function(req, res, next) {
  const testData = req.body;
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['./ml/test.py']);

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', '*');
  res.set('Access-Control-Allow-Headers', '*');
  // res.set('Content-Type', 'text/plain');

  console.log(testData);

  pyProg.stdout.on('data', function(data) {

    console.log(data.toString());
    // res.render('index', { title: data.toString() });

    // res.write(data.toString());
    // res.end('end');
    res.json({
      tests: ["test1", "test2", "test3", "test4"]
    })



  });
})

module.exports = router;
