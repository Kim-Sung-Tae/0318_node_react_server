var express = require('express');
var router = express.Router();



router.post('/',(req,res)=>{
    res.send( '  post send Page ')
})






module.exports = router;