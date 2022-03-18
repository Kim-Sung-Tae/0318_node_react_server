var express = require('express');
var router = express.Router();



router.get('/',(req,res)=>{
    res.send( ' get send Page ')
})






module.exports = router;