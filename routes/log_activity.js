 
 exports.add = function(request, res) {
 	console.log("log_activity");
 	var actions = request.body.selections.split(",");
 	var lifeExp = request.body.lifeExp;

 	var mongojs = require('mongojs');
    var db = mongojs('test');
    var actions_col = db.collection('actions');
    var time = new Date().getTime();
 	for (i=0;i<actions.length;++i) {
        actions_col.insert({user_id:1, action: actions[i], time:time});
    }

    var users = db.collection('users');
    users.update({id:1}, {$set:{ExpLifeSpan:lifeExp}}, function() {
    	res.send("done");
	});
}