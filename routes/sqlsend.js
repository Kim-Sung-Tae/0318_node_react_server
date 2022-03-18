var express = require('express');
var router = express.Router();



router.get('/',(req,res)=>{
    res.send( '/sqlsend  sql send Page ')
})





module.exports = router;