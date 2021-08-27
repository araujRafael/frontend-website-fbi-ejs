// var express = require('express');
// var router = express.Router();

/* GET home page. */
const empresa  = "FBI"
module.exports = router => {

  router.get('/', function(req, res, next) {
    
    res.status(200).render('index', { empresa,erro:null});

  });
}


