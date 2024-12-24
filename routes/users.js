var express = require('express');
const fs = require("node:fs");
const path = require("node:path");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
console.log("GET /users");
  try{
    const file = fs.readFileSync(path.join(__dirname, '../store', 'index.json'));
    res.send(JSON.parse(file));
  } catch(err) {
  console.log(err)
  }
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log("POST /users");
  const body = req.body;

  try{
    const file = fs.writeFileSync(path.join(__dirname, '../store', 'index.json'), JSON.stringify(body));
    console.log(JSON.parse(file));
  } catch(err) {
    console.log(err)
  }
  res.send('respond with a resource');
});

module.exports = router;
