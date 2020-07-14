module.exports = function(app) {

    app.get('/noticias/create', function(request, response) {
       app.app.controllers.admin.create_news(app, request, response); // Chama o controllers de admin
    });

    app.post('/noticias/save', function(request, response) {
        app.app.controllers.admin.save_news(app, request, response); // Chama o controllers de admin
    });
};