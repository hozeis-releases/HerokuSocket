module.exports = function (io, app) {
  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`, "socketio");

    socket.on('initialize', () => {
        const sockets = app.get('sockets') || [];
        sockets[socket.UsuarioId] = socket.id;
        app.set('sockets', sockets);
    });

    setInterval(() => io.emit("ping", new Date().toTimeString()), 30000);

    // handle the event sent with socket.emit()
    socket.on("command", (elem1, elem2, elem3) => {
      console.log(elem1, elem2, elem3);
    });
  });
};
