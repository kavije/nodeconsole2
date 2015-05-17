(function(CurrencyController) {
    var data = require('../data');

    //api handling the currencydata

         CurrencyController.init = function(app) {
        app.get('/api/currency/:fromcur/:tocur', function (req, res) {
            
            var fromcur = req.params.fromcur;
            var tocur = req.params.tocur;
            var resultcur = {};
            var currencyvalue = 0;
            data.getcurrencies(function (err, result) {

               
           for (var i = 0; i < result.length; i++) {
               if (result[i].currency === fromcur) {

                        resultcur = result[i].conversion;
                        for(var j=0;j < resultcur.length;j++)
                   {
                       if (resultcur[j].name === tocur) {
                           currencyvalue = resultcur[j].value;
                       }
                   }
                 }
               }
             res.send(JSON.stringify(currencyvalue));
    });

 });
    }
})(module.exports);