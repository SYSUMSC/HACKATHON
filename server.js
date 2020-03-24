const express = require('express');
const path = require('path');

const indexRouter = require('./routers/index');
const teamInfoRouter = require('./routers/teaminfo');

const app = express();

app.engine('html', require('express-art-template'));

app.set('views', path.join(__dirname, 'views'));

//路由设置
app.use('/', indexRouter);
app.use('/teaminfo',teamInfoRouter)

//静态资源路径 前端页面图片、css等放置
app.use(express.static('public'));

//监听启动服务器
app.listen(8080, () => {
    console.log('请访问http://localhost:8080');
})

//npm start 启动服务器