const mongoose = require('mongoose');


const zipsSchema = new mongoose.Schema({
	city:{
		type      : String
	},
	zip:{
		type      : String
	},
	loc:[{ y: String, z: String }],
	pop:{
		type      : Number
	},
	state:{
		type      : String
	},
});

module.exports = Zips = mongoose.model('zips',zipsSchema);