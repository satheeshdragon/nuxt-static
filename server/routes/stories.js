const router = require('express').Router();
let stories = require('../models/stories.model');

router.route('/').get((req,res) => {
	stories.find().limit(10)
		.then(stories => res.json(stories))
		.catch(err => res.status(400).json('Error: ' +err));
});



module.exports = router;