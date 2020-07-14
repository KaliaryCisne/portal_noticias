module.exports.home = function(app, request, response) {

    var connection = app.config.databases.connections();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getLastNews(function(error, result) {
        // console.log(result);
        response.render("home", {noticias : result});
    });
}