module.exports = function(app) {
    app.get('/', function(request, response) {
        app.app.controllers.home.home(app, request, response);
    });
};