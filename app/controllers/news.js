module.exports.news = function(app, request, response) {
    var connection = app.config.databases.connections();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result) {
        response.render("noticias/noticias", {news : result});
    });   
}

module.exports.notice = function(app, request, response) {
    var connection = app.config.databases.connections();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result) {
        response.render("noticias/noticia", {noticia : result});
    });
}