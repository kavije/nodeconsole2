(function(data) {

    var seeddata = require('./seedData');

    data.getcurrencies = function(next) {

        next(null, seeddata.getcurrencies);
    };
})(module.exports);