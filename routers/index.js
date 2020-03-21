const express = require('express');
const router = express.Router();

const db = require('../db/db');

const cs = require('cookie-session');
const bodyparser = require('body-parser');

//bodyparser默认设置
router.use(bodyparser.urlencoded({extende:true}));
router.use(bodyparser.json());

//cookies加密设置
router.use(cs({
    name : 'user',
    keys : ['hackathon','secure'],
}));

//路由
router.get('/',(req,res)=>{
    res.render('index.html');
});

router.get('/login',(req,res)=>{
    res.render('login.html')
});

router.get('/reg',(req,res)=>{
    res.render('reg.html');
});

router.post('/login',(req,res)=>{
    var wh = "userName = '"+req.body.userName+ "' and password = '" +req.body.password + "'";
    db.where(wh).select((datas)=>{
        //如果有该用户且密码正确则设置cookies,返回主页
        if(datas.length != 0){
            req.session.session_data = {
                userName : req.body.userName,
                password : req.body.password
            }
            res.render('/', {userName :req.body.userName});
        }
        else{
            res.send("<script> alert('不存在该用户或密码错误');window.location.href='/login'</script>");
        }
    })
})

router.post('/logout',(req,res)=>{
    req.session.session_data = 0;
    res.redirect('/');
})

module.exports = router;