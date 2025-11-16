const db = require('./db.config');

const User = {};

// ambil semua user
User.getAll = callback => {
    db.query('SELECT * FROM users', callback);
};

// ambil satu user by id
User.getById = (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

// tambah user baru
User.create = (data, callback) => {
    db.query('INSERT INTO users SET ?', data, callback);
};

// update user
User.update = (id, data, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [data, id], callback);
};

// hapus user
User.delete = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = User;
