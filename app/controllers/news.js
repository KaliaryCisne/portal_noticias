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

    var news_id = request.query;

    noticiasModel.getNoticia(news_id, function(error, result) {
        console.log(result);
        response.render("noticias/noticia", {news : result});
    });
}