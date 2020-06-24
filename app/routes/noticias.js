module.exports = function(app) {
    app.get('/noticias', function(request, response) {
        response.render('noticias/noticias');
    });
};
