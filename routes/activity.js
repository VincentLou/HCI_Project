var models = require('../models');
    
/*
 * GET log page.
 */

exports.view = function(req, res){
	models.Lifespans
	.find()
	.sort({date: 1})
	.exec(renderGraphs);

	function renderGraphs(err, lifespans) {
	  	res.render('activity', {"rawLifespans": lifespans});
	}
};
