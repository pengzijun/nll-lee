'use strict';

const express = require('express');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, '../front-end/dist')));
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
//设置跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next()
});
//配置body-parser
const bodyparser = require("body-parser");
//处理application/x-www-form-urlencoded的 parser
app.use(bodyparser.urlencoded({extended: false}));

//设置session
const session = require("express-session");
//设置路由之前
//设置session
app.use(session({
    secret: '12345',
    resave: true,
    saveUninitialized: true,
    //maxage 单位毫秒
    cookie: {maxAge: 3600000}
}));

const settings = require('./setting');
app.listen(settings.port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    let uri = 'http://localhost:' + settings.port;
    console.log('Listening at ' + uri + '\n');

});