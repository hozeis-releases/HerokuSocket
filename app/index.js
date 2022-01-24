const express = require("express")

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// The io instance is set in Express so it can be grabbed in a route
app.set('io', io);

require('./io')(io, app);

const editorCommands = require('./routes/editor/commands');
app.use(editorCommands);

// simple route
app.get('/', (_req, res) => {
  res.send('Hello World!')
});

// set port, listen for requests
server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});