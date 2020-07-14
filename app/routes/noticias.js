module.exports = function(app) {  

    app.get('/noticia', function(request, response) {
        app.app.controllers.news.notice(app, request, response);
    });

    app.get('/noticias', function(request, response) {
        app.app.controllers.news.news(app, request, response);             
    });
};
