var express = require('express');
var router = express.Router();




router.get('/',(req,res)=>{
    res.send( ' get send Page ')
})

router.get('/getjson',(req,res)=>{
    res.send({ 'url':'/getsend/getjson'});
})


router.post('/post',(req,res)=>{
    res.send({
         'url' :'getsend/post',
         'title' : 'get send .js 내의 라우팅'
        });
})






module.exports = router;