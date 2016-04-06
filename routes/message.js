var models = require("../models");

exports.send = function(req, res) {
	var body = req.body;
	var date = new Date();
	var dateCreated = date.getDate() + " " + date.getMonth() + " " + date.getFullYear();
	var MessageSchema = new models.Message({
		"email": body.email,
		"content": body.content,
		"created": dateCreated
	});

	models.Message
	.find({})
	.exec(unique);

	function unique(err, arr) {
		var data = {data: arr};
		MessageSchema.save(function() {
			res.redirect('/');
		});
	}
};
