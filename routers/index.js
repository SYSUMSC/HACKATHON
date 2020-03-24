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

//根页(主页)————ok
router.get('/',(req,res)=>{
    // console.log(req.session.session_data);
    if(req.session.session_data != null)
        res.render('index.html', {userName : req.session.session_data.userName});
    else
        res.render('index.html', {userName : 0});
});

//登录页面————ok
router.get('/login',(req,res)=>{
    res.render('login.html')
});

//注册页面————ok
router.get('/reg',(req,res)=>{
    res.render('reg.html');
});

//登录请求————ok
router.post('/login',(req,res)=>{
    var wh = "userName = '" + req.body.userName + "' and password = '" + req.body.password + "'";
    db.where(wh).selectUser((datas)=>{
        //如果有该用户且密码正确则设置cookies,返回主页
        if(datas.length != 0){
            req.session.session_data = {
                userName : req.body.userName,
                password : req.body.password
            }
            res.redirect('/');
        }
        else{
            res.send("<script> alert('不存在该用户或密码错误');window.location.href='/login'</script>");
        }
    })
})

//登出请求————ok
router.get('/logout',(req,res)=>{
    //清空cookies
    req.session.session_data = 0;
    res.redirect('/');
})

// 注册请求————待测试
router.post('/reg',(req,res)=>{
    var wh = "userName = '" + req.body.userName + "'";
    db.where(wh).selectUser((datas)=>{
        //如果无该用户则可以注册
        if(datas.length == 0){
            // console.log(req.body);
            db.where(wh).addUser(req.body, (affectedRows)=>{
                if(affectedRows)
                    res.send("<script> alert('注册成功');window.location.href='/login'</script>");
            });
        }
        else{
            res.send("<script> alert('该用户名已被注册');window.location.href='/login'</script>");
        }
    })
})


module.exports = router;