(function(Controller) {
    //controller index

    var HomeController = require('./HomeController');
    var CurrencyController = require('./CurrencyController');
    var MapController = require('./MapController.js');

    Controller.init = function(app) {

        HomeController.init(app);
        CurrencyController.init(app);
        MapController.init(app);
    };

})(module.exports);