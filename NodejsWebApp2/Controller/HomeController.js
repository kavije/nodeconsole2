(function(HomeController) {
    var data = require('../data');
    
    HomeController.init = function(app) {
        app.get('/', function(req, res) {
           
                res.render("index", { title: "Google Currency Converter"});  

           });
   }

})(module.exports);