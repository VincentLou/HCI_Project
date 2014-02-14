
/*
 * GET log page.
 */

exports.view = function(req, res){
  var mongojs = require('mongojs');
  var db = mongojs('mydb', ['mycollection']);

  console.log(db);
  console.log('clicked on activity');

	
  

  res.render('activity');

};