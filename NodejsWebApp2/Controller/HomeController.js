(function(HomeController) {
    var data = require('../data');
    var jsonQuery  = require('json-query');
    HomeController.init = function(app) {
        app.get('/', function(req, res) {
            data.getcurrencies(function(err, result) {
                res.render("index", { title: "express+vash" ,error: err, currencies: result});  

            });
           
        });



        //app.getCurrency('/api/currency/:fromcur/:tocur', function (req, res) {

        //    var fromcur = req.params.fromcur;
        //    var tocur = req.params.tocur;

        //    data.getcurrencies(function (err, result) {

                //var data = {
                //    fromcur: fromcur,
                //    tocur: tocur,
                //    curlist:result
                //};
                

                //jsonQuery('curlist[currency=fromcur].conversion[name=tocur].value', {
                //    data: data
                //});


               // res.render("index", { title: "express+vash" , error: err, currencies: result });

            //});
           
       // });

    };

})(module.exports);