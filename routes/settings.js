exports.view = function(req, res){

	var models = require('../models');
	models.Group.find().exec(afterQuery);

	function afterQuery(err, group) {
		if(err) console.log(err);
		var output = [];
		var groupCount = 0;
		var count = group.length;
		for(var i=0; i<count; i++) {
			var json = group[i];
			output.push({'name':json.name, 'id':json.id, 'items':[]});
			models.ActionType.find({"group_name":json.name}).exec(afterQueryAction);
			function afterQueryAction(err, items) {
				if(err) console.log(err);
				// console.log(items);
				var itemArr = [];
				for(var j=0; j<items.length; j++) {
					itemArr.push({"name": items[j].name, "id":items[j].id});
				}
				if(items.length!=0){
					for(var k=0; k<output.length; k++){
						if(output[k].name == items[0].group_name) {
							output[k].items=itemArr;
						}
					}
				}
				groupCount = groupCount + 1;

				if(groupCount==count){
					var finalOutput = {'groups': output};
					res.render('settings',finalOutput);
				}
			}
		}
	}
};

exports.addGroup = function(req, res) {
  var form_data = req.body;
  var models = require('../models');

  var newGroup= new models.Group(form_data);
  newGroup.save(afterSaving);

  function afterSaving(err, results) {
    if(err) console.log(err);
    res.send(500);
  }
}

exports.addItem = function(req, res) {
  var form_data = req.body;
  var models = require('../models');

  var newAction = new models.ActionType(form_data);
  newAction.save(afterSaving);

  function afterSaving(err, results) {
    if(err) console.log(err);
    res.send(500);
  }
}

exports.removeGroup = function(req, res) {
  var id = req.body.value;
  console.log('group'+id);
  var models = require('../models');
  models.Group.find({'id': id}).remove().exec(afterQuery);
  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.send(500);
  }
}

exports.removeItem = function(req, res) {
  var id = req.body.value;
    console.log('item'+id);
  var models = require('../models');
  models.ActionType.find({'id': id}).remove().exec(afterQuery);
  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.send(500);
  }
}