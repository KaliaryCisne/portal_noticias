const noticias = require("../routes/noticias");

module.exports = function() {
    
    this.getNoticias = function(connection, callback) {
        connection.query('select * from tb_noticias', callback);
    };

    this.getNoticia = function(connection, callback) {
        connection.query('select * from tb_noticias where id = 1', callback);
    };

    this.salvarNoticia = function(noticia, connection, callback) {
        connection.query('insert into tb_noticias set ? ', noticia, callback)
    }

    return this;
}