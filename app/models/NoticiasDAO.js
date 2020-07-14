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
    this._connection.query('insert into tb_noticias set ? ', noticia, callback);
}

NoticiasDAO.prototype.getLastNews = function(callback) {
    this._connection.query('select * from tb_noticias order by created_at desc limit 5', callback);
}

module.exports = function() {
    return NoticiasDAO;
}