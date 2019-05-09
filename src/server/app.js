const express = require('express');
const dir = './front';
const app = express();


app.use(express.static(dir));

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: dir });
});
app.listen(3000,function(){
    console.log("Server is running");
});