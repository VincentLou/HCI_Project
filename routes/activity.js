
/*
 * GET log page.
 */

exports.view = function(req, res){
  console.log('clicked on activity');
  res.render('activity');
};