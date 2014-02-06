
/*
 * GET log page.
 */

exports.view = function(req, res){
  console.log('clicked on log');
  res.render('log');
};