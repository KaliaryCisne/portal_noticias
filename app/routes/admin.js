module.exports = function(app) {
    app.get('/noticias/create', function(request, response) {
        response.render('admin/noticia_create', {noticia : {}});
    });

    app.post('/noticias/save', function(request, response) {
        var noticia = request.body;

        request.assert('title', 'Title is required').notEmpty();
        request.assert('resume', 'Resume is required').len(10, 100);
        request.assert('author', 'Author is required').notEmpty();
        request.assert('news_date', 'Date is required').notEmpty().isDate({format: 'YYYY-MM-DD'});
        request.assert('news', 'News is required').notEmpty();

        var errors = request.validationErrors();
        if(errors) {
            response.render('admin/noticia_create', {validacao: errors, noticia : noticia});
            return;
        }


        var connection = app.config.databases.connections();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result) {
            response.redirect("/noticias");
        });

    });
};