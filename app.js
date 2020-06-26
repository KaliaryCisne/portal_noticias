var app = require('./config/server');

var routeNoticias = require('./app/routes/noticias')(app);
var routeFormularioInclusao = require('./app/routes/formulario_inclusao_noticia')(app);
var routeHome = require('./app/routes/home')(app);

app.listen('3000', function() {
   console.log('Server started');
});