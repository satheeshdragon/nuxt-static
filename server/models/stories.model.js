const mongoose = require('mongoose');


const storiesSchema = new mongoose.Schema({
	href:String,
	title:String,
	comments:Number,
	container:[{ name: String, short_name: String }],
	media:String,	
});

module.exports = Stories = mongoose.model('stories',storiesSchema);