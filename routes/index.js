
/*
 * GET home page.
 */

exports.view = function(req, res){
  var mongojs = require('mongojs');
  var db = mongojs('test');
  var users = db.collection('users');
  //console.log(users);
  users.find({id:1}, function(err, doc) {
    console.log(doc);
    var expLifeSpan = doc[0].ExpLifeSpan;
    var curAge = doc[0].age;

   	res.render('index', {
      'expLifeSpan': expLifeSpan,
  	  'curAge': curAge
    });
  });

};