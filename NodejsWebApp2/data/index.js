(function(data) {

    var seeddata = require('./seedData');
    var mapdata = require('./mapData.js');

    data.getcurrencies = function(next) {

        next(null, seeddata.getcurrencies);
    };
    data.getmap = function (next) {
        
        next(null, mapdata.getMapdata);
    };
})(module.exports);