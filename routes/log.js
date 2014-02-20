
/*
 * GET log page.
 */
var groups = require('../groups.json');

exports.view = function(req, res){
  console.log('clicked on log');
  var mongojs = require('mongojs');
  var db = mongojs('test');
  var users = db.collection('users');
  users.find({}, function(err, doc) {

  	console.log(err);
    if(doc!=null && doc.length > 0){
      console.log("db works");
   	  var expLifeSpan = doc[0].ExpLifeSpan;
      var curAge = doc[0].age;
      data = groups;
      data['expLifeSpan'] = expLifeSpan;
      data['curAge'] = curAge;
      res.render('log', data
      // {
      //   'expLifeSpan': expLifeSpan,
  	   //  'curAge': curAge
      // }
      );
    } else {
      console.log("insert again");
	  users.insert({id:1, name:"test user", ExpLifeSpan:70, age:23});
      data = groups;
      data['expLifeSpan'] = 70;
      data['curAge'] = 23;
      res.render('log', data
      // {
      // 	'expLifeSpan': 70,
  	  	// 'curAge': 23
      // }
      );
    }
  });
};

exports.update = function(req, res) {
  var lifespan = req.body.value;
  console.log('life span'+id);
  var models = require('../models');
  models.User.update({'id':1}, {'lifespan':lifespan}).exec(afterQuery);
  function afterQuery(err, projects) {
    if(err) console.log(err);
    console.log("success");
    res.send(500);
  }
}