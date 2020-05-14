const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	username:{
		type      : String,
		required  : true,
	},
},{
	timestamps:true,
});

module.exports = User = mongoose.model('User',userSchema);