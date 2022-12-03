const express = require('express')
const app = express()
const jsonData = {count:12, message: 'hey!'};
var fs = require('fs')

app.get(`/`, (req, res) =>{
    fs.readFile('index.html', function(err, buffer){
       var html = buffer.toString()

       res.setHeader('Content-Type', 'text/html')
       res.send(html)
    })
})

app.get(`/data`, (req, res) => {
    res.send(jsonData)
})

var port = 3000
app.listen(port, function(){
    console.log(`listening on http://localhost:${port}`)
});
