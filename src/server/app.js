const express = require('express');
const app = express();
const path = require('path');
/*app.use(bodyParser.json());

app.use((req,res,next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
next();
});*/

app.use(express.static(__dirname + '/../dist'));
//app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/front/src/index.html'));
  });
app.listen(3000,function(){
    console.log("Server is running");
});