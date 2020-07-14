function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select * from tb_noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._connection.query('select * from tb_noticias where id = 1', callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    console.log(noticia);
    var result = this._connection.query('insert into tb_noticias set ? ', noticia, callback);
}

module.exports = function() {
    return NoticiasDAO;
}