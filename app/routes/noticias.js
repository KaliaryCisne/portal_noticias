var dBconnection = require('../../config/databases/connections');

module.exports = function(app) {  

    var connection = dBconnection();

    app.get('/noticias', function(request, response) {

        connection.query('select * from tb_noticias', function(error, result) {

            if (error != null) {
                response.render("errors/undefined", {error : error});
            }

            response.render("noticias/noticias", {news : result});
        });
    });
};
