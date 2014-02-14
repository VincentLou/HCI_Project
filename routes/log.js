
/*
 * GET log page.
 */

exports.view = function(req, res){
  console.log('clicked on log');
  var mongojs = require('mongojs');
  var db = mongojs('test');
  var users = db.collection('users');
  users.find({id:1}, function(err, doc) {
    if(doc!=null && doc.length > 0){
      console.log("db works");
   	  var expLifeSpan = doc[0].ExpLifeSpan;
      var curAge = doc[0].age;
      res.render('log', {
        'expLifeSpan': expLifeSpan,
  	    'curAge': curAge
      });
    } else {
      console.log("insert again");
	  users.insert({id:1, name:"test user", ExpLifeSpan:70, age:23});
      res.render('log', {
      	'expLifeSpan': 70,
  	  	'curAge': 23
      });
    }
  });
};
