function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select * from tb_noticias order by created_at desc', callback);
};

NoticiasDAO.prototype.getNoticia = function(news_id, callback) {
    console.log("valor: ", news_id.id);
    this._connection.query('select * from tb_noticias where id = ' + news_id.id, callback);
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