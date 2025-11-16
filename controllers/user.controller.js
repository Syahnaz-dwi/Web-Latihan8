const User = require('../models/user.model');

// GET semua user
exports.getAllUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

// GET user by ID
exports.getUserById = (req, res) => {
    User.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result[0]);
    });
};

// CREATE user baru
exports.createUser = (req, res) => {
    console.log("DATA BODY DITERIMA:", req.body);

    User.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, ...req.body });
    });
};

// UPDATE user by ID
exports.updateUser = (req, res) => {
    User.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User updated", data: req.body });
    });
};

// DELETE user by ID
exports.deleteUser = (req, res) => {
    User.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User deleted" });
    });
};
