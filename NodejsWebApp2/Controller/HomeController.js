(function(HomeController) {
    var data = require('../data');
    HomeController.init = function(app) {
        app.get('/', function(req, res) {
            data.getcurrencies(function(err, result) {
                res.render("index", { title: "express+vash" ,error: err, currencies: result});  

            });
           
        });
    };

})(module.exports);