var express = require('express')
var app = express();


var getsend = require('./routes/getsend')
var postsend = require ('./routes/postsend')
var sqlsend = require('./routes/sqlsend')


app.set('port',8080);

app.get('/',(req,res) => {
    res.send(' port 8080 kst Server ')
})


app.use('/getsend',getsend);
app.use('/postsend',postsend);
app.use('/sqlsend',sqlsend);




app.listen(8080,()=>{
    console.log(' console .test  ')
})


