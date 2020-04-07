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

/*不确定可不可以，.teaminfo.html需要改，改成那种显示信息，然后有一个添加成员的按键，按了之后跳转，不然每次更改都要重新填全队消息，太麻烦了
router.get('/', (req,res)=>{
	if(req.session.session_data!=0){
	var wh = "userName = '" + req.session.session_data.userName + "'";
    db.where(wh).selectTeam((datas)=>{
        //如果有该用户且密码正确则设置cookies,返回主页
        if(datas.length != 0){
    res.render('teaminfo.html',{userName : req.session.session_data.userName});
        }
        else{
    res.render('teaminfo.html',{userName : req.session.session_data.userName});
        }
	}
	else{
	res.send("<script> alert('该用户名已被注册');window.location.href='/login'</script>");
	}
});
*/
//队伍信息页 此时根路径 / 为 ./teaminfo
router.get('/', (req,res)=>{
    res.render('teaminfo.html',{userName : req.session.session_data.userName});
});

module.exports = router;