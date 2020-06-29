module.exports = function(app) {
    app.get('/noticia', function(request, response) {

        var connection = app.config.databases.connections();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function(error, result) {
            response.render("noticias/noticia", {noticia : result});
        }); 
    });
};