const express = require("express");

const router = new (express).Router();

router.get('/editor/commands/addNode', (req, res) => {
    const formData = req.query;
    
    const io = req.app.get('io');
    //const sockets = req.app.get('sockets');
    //const thisSocketId = sockets[req.UsuarioId];
    //const socketInstance = io.to(thisSocketId);
    //socketInstance.emit('produtoSyncProgress', 0);
    io.emit('command','addNode',formData)
    res.status(200).send({status: 1});
});

router.get('/editor/commands/updateNode', (req, res) => {
    const formData = req.query;
    
    const io = req.app.get('io');
    //const sockets = req.app.get('sockets');
    //const thisSocketId = sockets[req.UsuarioId];
    //const socketInstance = io.to(thisSocketId);
    //socketInstance.emit('produtoSyncProgress', 0);
    io.emit('command','updateNode',formData)
    res.status(200).send({status: 1});
});


module.exports = router;