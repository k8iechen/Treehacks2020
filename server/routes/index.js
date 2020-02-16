var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['./ml/test.py']);

  pyProg.stdout.on('data', function(data) {

    console.log(data.toString());
    // res.render('index', { title: data.toString() });
    res.write(data);
    // res.end('end');
    
    

  });
  
});

router.post('/', function(req, res, next) {
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['./ml/test.py']);

  pyProg.stdout.on('data', function(data) {

    console.log(data.toString());
    // res.render('index', { title: data.toString() });
    res.write(data);
    // res.end('end');
    
    

  });
})

module.exports = router;
