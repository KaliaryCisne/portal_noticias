module.exports = function(app) {
    app.get('/noticia', function(request, response) {

        var connection = app.config.databases.connections();

        connection.query('select * from tb_noticias where id = 1', function(error, result) {
            response.render('noticias/noticia', {noticia: result});
        });
    });
};