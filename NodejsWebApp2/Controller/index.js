(function(Controller) {

    var HomeController = require('./HomeController');
    var CurrencyController = require('./CurrencyController');

    Controller.init = function(app) {

        HomeController.init(app);
        CurrencyController.init(app);
    };

})(module.exports);