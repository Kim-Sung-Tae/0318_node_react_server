var express = require('express');
var router = express.Router();

var dbconfig = require('../db/dbconfig')

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig);



router.get('/sql',(req,res)=>{
    connection.query('SELECT * FROM reactinterview.interview',(error,result)=>{
        if(error) throw error;
        console.log(' 해당스키마의 내용  :' ,result);
        res.send(result);
    })
})


router.get('/',(req,res)=>{
    res.send( '/sqlsend  sql send Page ')
})





module.exports = router;