var models = require("../models");

exports.view = function(req, res) {

	models.Message
	.find({})
	.exec(getData);

	function getData(err, match) {
		var data = {data:match};
		res.render("index", data);
	}
}
