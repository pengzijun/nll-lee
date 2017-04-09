'use strict';

const express = require('express');
const path = require('path');
let app = express();

//提供静态资源
app.use(express.static(path.join(__dirname, '../front-end/dist')));
//配置body-parser
const bodyparser = require("body-parser");

//处理application/x-www-form-urlencoded的 parser
app.use(bodyparser.urlencoded({extended: false}));

//设置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next()
});

//设置orm
const orm = require("orm");
app.use(orm.express("mysql://root:root@localhost:3306/mypro", {
    define: function (db, models, next) {
        //
        let m = require("./models/model.js");
        m(db, models);
        next();
    }
}));


// cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//设置session
const session = require("express-session");
//设置session
app.use(session({
    secret: '12345',
    resave: true,
    saveUninitialized: true,
    //maxage 单位毫秒
    cookie: {maxAge: 3600000}
}));
//提供方法接口
let api = require('./routes/api.js');
app.use('/api', api);
const settings = require('./setting');
app.listen(settings.port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    let uri = 'http://localhost:' + settings.port;
    console.log('Listening at ' + uri + '\n');

});