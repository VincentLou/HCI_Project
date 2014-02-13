
/*
 * GET log page.
 */

exports.view = function(req, res){
  console.log('clicked on log');
  var mongojs = require('mongojs');
  var db = mongojs('test');
  var users = db.collection('users');
  users.find({id:1}, function(err, doc) {
  	console.log(doc.length);
    if(doc!=null && doc.length > 0){
   	  var expLifeSpan = doc[0].ExpLifeSpan;
      var curAge = doc[0].age;
      res.render('log', {
        'expLifeSpan': expLifeSpan,
  	    'curAge': curAge
      });
    } else {
	  users.insert({id:1, name:"test user", ExpLifeSpan:90, age:23});
      res.render('log', {
      	'expLifeSpan': 90,
  	  	'curAge': 23
      });
    }
  });
};