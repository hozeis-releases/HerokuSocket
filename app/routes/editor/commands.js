const express = require("express");
const multer = require('multer');
const upload = multer();

const router = new (express).Router();

router.get('/editor/commands/addNode', upload.none(), (req, res) => {
    console.log('received data');
    const {x, y, width, height} = req.body;
    const io = req.app.get('io');
    //const sockets = req.app.get('sockets');
    //const thisSocketId = sockets[req.UsuarioId];
    //const socketInstance = io.to(thisSocketId);
    //socketInstance.emit('produtoSyncProgress', 0);
    io.emit('command','addNode',x, y, width, height)
    res.status(200).send({
        status: 1,
    });
});

module.exports = router;