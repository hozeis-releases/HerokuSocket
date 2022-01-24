const router = new (express).Router();

router.get('/editor/commands/addNode', (req, res) => {
    console.log('received data');
    const io = req.app.get('io');
    //const sockets = req.app.get('sockets');
    //const thisSocketId = sockets[req.UsuarioId];
    //const socketInstance = io.to(thisSocketId);
    //socketInstance.emit('produtoSyncProgress', 0);
    io.emit('command','addNode')
});

module.exports = router;