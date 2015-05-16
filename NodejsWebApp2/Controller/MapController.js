(function (MapController) {
    var data = require('../data');
    var jsonQuery = require('json-query');
    MapController.init = function (app) {
        app.get('/api/mapdata', function (req, res) {
            data.getmap(function (err, result) {
                var data = result;

                res.send(JSON.stringify(result));


            });


           
        });

       

      

    };

})(module.exports);