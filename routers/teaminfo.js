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


//队伍信息页 此时根路径 / 为 ./teaminfo
router.get('/', (req,res)=>{
    res.render('teaminfo.html',{userName : req.session.session_data.userName});
});

module.exports = router;