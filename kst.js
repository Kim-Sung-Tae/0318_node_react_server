var express = require('express')
var app = express();




app.set('port',8080);

app.get('/',(req,res) => {
    res.send(' port 8080 kst Server ')
})


app.listen(8080,()=>{
    console.log(' console .test  ')
})


