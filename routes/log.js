
/*
 * GET log page.
 */
 var groups = require('../groups.json');

 exports.view = function(req, res){
  console.log('clicked on log');
  var models = require('../models');
  console.log("click on index");
  models.User.find({'id':1}, function(err, doc) {

  	console.log(err);
    if(doc!=null && doc.length > 0){
      console.log("db works");
      var expLifeSpan = doc[0].ExpLifeSpan;
      var curAge = doc[0].age;
      data = groups;
      data['curAge'] = curAge;

      var models = require('../models');
      models.Lifespans.find({}).sort({date: -1}).exec(function(err,docs){
        var lastLifeSpan = docs[0];
        data['expLifeSpan'] = lastLifeSpan.lifespan;
        res.render('log', data);
      });
    } else {
      console.log("insert again");
      users.insert({id:1, name:"test user", ExpLifeSpan:70, age:23});
      data = groups;
      data['expLifeSpan'] = 70;
      data['curAge'] = 23;
      res.render('log', data);
    }
  });
};

exports.update = function(req, res) {
  var lifespan = req.body.value;
  console.log('life span'+lifespan);
  var models = require('../models');
  models.Lifespans.find({}).sort({date: -1}).exec(function(err,docs){
    var lastID = docs[0]._id;
    data['expLifeSpan'] = docs[0].lifespan;
    console.log(lastID);
    models.Lifespans.update({'_id':lastID}, {'lifespan':lifespan}).exec(afterQuery);
    function afterQuery(err, lifespans) {
      if(err) console.log(err);
      console.log("success");
      res.send(500);
    }
  });

}