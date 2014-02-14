
/*
 * GET home page.
 */

exports.view = function(req, res){
  var mongojs = require('mongojs');
  var db = mongojs('test');
  var users = db.collection('users');
  console.log("click on index");
  users.find({id:1}, function(err, doc) {
  	//console.log(doc.length);
    if(doc!=null && doc.length > 0){
      console.log("db works");
   	  var expLifeSpan = doc[0].ExpLifeSpan;
      var curAge = doc[0].age;
      res.render('index', {
        'expLifeSpan': expLifeSpan,
  	    'curAge': curAge
      });
    } else {
      console.log(doc);
      console.log("insert again");
	  users.insert({id:1, name:"test user", ExpLifeSpan:70, age:23});
      res.render('index', {
      	'expLifeSpan': 70,
  	  	'curAge': 23
      });
    }
  });
};
