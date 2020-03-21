const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '123321',
    database : 'hackathon'
});

connection.connect();

module.exports = {
    wh : undefined,
    //where条件添加———— db.where(用户信息)
    where(wh){
        this.wh = wh;
        return this;
    },

    //添加用户————db.adduser(数据)
    addUser(datas){
        //组装sql语句
        var sql = "insert into users (userName, mail, password) values ('"+ datas.userName +"','" +datas.mail+ "','" +datas.password + "')";
        //测试用
        console.log(sql);
        connection.query(sql, (err, dataFromSQL)=>{
            if(err)console.log(err);
        });
    },

    //查找用户————db.where(用户数据).selectUser(回调函数) 调用的文件得到dataFromSQL内容
    selectUser(callback){
        var sql = "select * from users where " + this.wh;
        console.log(sql);
        connection.query(sql,(err, dataFromSQL)=>{
            if(err)console.log(err);
            callback(dataFromSQL);
        })
        wh = undefined;
    },

    //增加成员————db.where(用户).addMember(添加的内容)
    //未完成
    addMember(datas){
        //组装sql语句
        var sql = "insert into members (userName, ) values";
        //测试用
        console.log(sql);
        connection.query(sql, (err, dataFromSQL)=>{
            if(err)console.log(err);
        });
        wh = undefined;
    },

    //删除成员————db.where(用户+该成员).deleteMember()
    //未完成
    deleteMember(){
        if(wh == undefined){
            console.log('无where条件');
            return;
        }
        var sql = "delete from members where " + this.wh;
        console.log(sql);
        connection.query(sql, (err, dataFromSQL)=>{
            if(err)console.log(err);
        });
        wh = undefined;
    },

    //更新成员————db.where(用户+该成员).updateMember(更新成员的内容)
    //未完成
    updateMember(datas){
        var sql = "update members set ";
        console.log(sql);
        connection.query(sql, (err, dataFromSQL)=>{

        });
        wh = undefined;
    },


}