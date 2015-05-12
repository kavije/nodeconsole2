(function(Controller) {

    var HomeController = require('./HomeController');

    Controller.init = function(app) {

        HomeController.init(app);
    };

})(module.exports);