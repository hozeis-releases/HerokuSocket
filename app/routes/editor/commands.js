const express = require("express");
const multer = require('multer');
const upload = multer();

const router = new (express).Router();

router.post('/editor/commands/addNode', upload.none(), (req, res) => {
    console.log('received data');
    const formData = req.body;
    
    console.log('form data '+formData);
    const io = req.app.get('io');
    //const sockets = req.app.get('sockets');
    //const thisSocketId = sockets[req.UsuarioId];
    //const socketInstance = io.to(thisSocketId);
    //socketInstance.emit('produtoSyncProgress', 0);
    io.emit('command','addNode',formData)
    res.status(200).send(formData);
});

module.exports = router;