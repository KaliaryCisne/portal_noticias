const { compile } = require("ejs");

module.exports.create_news = function(app, request, response) {

    response.render('admin/noticia_create', {noticia : {}});
}

module.exports.save_news = function(app, request, response) {

    var noticia = request.body;

    request.assert('title', 'Title is required').notEmpty();
    request.assert('resume', 'Resume is required').len(10, 100);
    request.assert('author', 'Author is required and must be between 5 and 30 characters').len(5, 30);
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
        if (error) {
            console.log(error);
        }
        response.redirect("/noticias");
    });
}