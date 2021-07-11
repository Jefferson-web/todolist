const express = require('express');
const path = require('path');

const app = express();

const APP_PATH = './dist/todolist';

app.use(express.static(path.join(__dirname, APP_PATH)));

app.get('*', (req, res) => {
    res.send(path.join(__dirname, APP_PATH + "/index.html"));
});

const SERVER_PORT = process.env.PORT || 7000;

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});