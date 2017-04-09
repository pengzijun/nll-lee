/**
 * Created by leezii on 2017/4/9.
 */
let express = require('express');
let router = express.Router();
//登录
router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    req.models.user.find({username: username, password: password}, (err, users) => {
        if (users.length > 0) {
            req.session.user = users[0];
            res.json({code: 1, message: '登录成功', flag: users[0].flag});
        } else {
            res.json({code: 0, message: '登录失败'});
        }
    });
});
//站点
router.get('/sites/getTime', (req, res) => {
    res.json({time: new Date() - 0})
});
router.get("/menu", (req, res) => {
    let array = [];
    let o = {"name": "全部区域", "isParent": true, "open": true, "children": []};
    array.push(o);
    let user = req.header('Authorization');
    if (user === undefined) {
        return;
    }
    if (user === "0") {
        array.push({"name": "用户管理"});

        // 0 超级管理员
        req.models.area.find({}, (err, areas) => {
            if (areas.length === 0 || err) {
                res.json(array);
                return;
            }
            areas.forEach((item) => {
                //处理区域
                let name = '[' + item.areano + ']' + item.name;
                let obj = {"name": name, "open": true, "isParent": true, "children": []};
                o.children.push(obj);
                //处理站点
                req.models.site.find({areano: item.areano}, (err, sites) => {
                    sites.forEach((item) => {
                        let name = '[' + item.drvno + ']' + item.name;
                        obj.children.push({name: name});

                        res.json(array);
                    });
                })
            });
        })
    }
    else if (user === "1") {
        array.push({"name": "修改密码"});
        array.push({"name": "区域和站点管理", "target": "_self"})
        //1 区域管理员
        req.models.area.find({userid: user.id}, (err, areas) => {
            if (areas.length === 0 || err) {
                res.json(array);
                return;
            }
            areas.forEach((item) => {
                //处理区域
                let name = '[' + item.areano + ']' + item.name;
                let obj = {"name": name, "open": true, "isParent": true, "children": []};
                o.children.push(obj);

                //处理站点
                req.models.site.find({areano: item.areano}, (err, sites) => {

                    sites.forEach((item) => {
                        let name = '[' + item.drvno + ']' + item.name;
                        obj.children.push({name: name});

                        res.json(array);
                    });
                })

            });
        })

    }
    else if (user === "2") {
        array.push({"name": "修改密码"});
        //array.push({"name": "区域和站点管理", "target":"_self", "url": "/users/sitemanage"})
        //2 站点管理员
        //处理站点
        req.models.site.find({userid: user.id}, (err, sites) => {
            if (sites.length === 0 || err) {
                res.json(array);
                return;
            }
            sites.forEach((item) => {
                let name = '[' + item.drvno + ']' + item.name;
                o.children.push({name: name, "target": "_self"});
                res.json(array);
            });
        })
    }
});
module.exports = router;