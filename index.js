// file: server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/callback', (req, res) => {
    const authCode = req.query.code;
    res.send(`Your auth code is: ${authCode}`);
});

app.get('/', (req, res) => {

    res.send(`Your auth code is:sahilindia`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
