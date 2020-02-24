const express = require('express')
const path = require('path');
const app = express();
const { Fcal } = require('fcal');
const fcal = new Fcal();
const port = process.env.PORT || 8080;

console.log("test 1 2");
 
app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.get('/evaluate/', function(req, res){
    var expression = req.query.expression;
    res.send(fcal.evaluate(expression));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));