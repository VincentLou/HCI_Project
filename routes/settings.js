exports.view = function(req, res){

	// res.render('settings',{
	// 	'projects': [
	// 		{ 	'name': 'Waiting in Line',
	// 	    	'image': 'lorempixel.people.1.jpeg',
	// 	    	'id': 'project1'
	// 		},
	// 		{ 	'name': 'User Test Results and Online Test Proposal',
	// 			'image': 'lorempixel.city.2.jpeg',
	// 			'id': 'project8'
	// 		}
	// 	]
 //  	});
  	res.render('settings',{
	'groups': [
		{ 	'name': 'Diet',
			'id': 'Diet',
		    'items': [
		    	{ 'name': 'I ate veggies', 'id':'I_ate_veggies'},
		    	{ 'name': 'I drank water', 'id': 'I_drank_water'},
		    	{ 'name': 'I ate when hungry', 'id':'I_ate_when_hungry'},
		    ]
		},
		{ 	'name': 'Exercise',
			'id': 'Exercise',
			'items': []
		},
		{ 	'name': 'Social',
			'id': 'Social',
			'items': []
		},
		{ 	'name': 'Lifestyle',
			'id': 'Lifestyle',
			'items': []
		}
	]});
};