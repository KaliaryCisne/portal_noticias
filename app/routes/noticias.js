module.exports = function(app) {  

    app.get('/noticias', function(request, response) {

        var connection = app.config.databases.connections();

        connection.query('select * from tb_noticias', function(error, result) {

            response.render("noticias/noticias", {news : result});
        });
    });
};
