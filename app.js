const express = require('express')
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.get(express.static(path.join(__dirname,"css/style.css")));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));