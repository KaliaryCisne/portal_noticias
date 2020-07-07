module.exports = function(app) {
    app.get('/noticias/create', function(request, response) {
        response.render('admin/noticia_create');
    });

    app.post('/noticias/save', function(request, response) {
        var noticia = request.body;

        var connection = app.config.databases.connections();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result) {
            response.redirect("/noticias");
        });

    });
};