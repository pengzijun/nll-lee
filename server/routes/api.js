/**
 * Created by leezii on 2017/4/9.
 */
let express = require('express');
let router = express.Router();
router.post('/login', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    req.models.user.find({ username: username, password: password }, (err, users) => {
        if(users.length > 0) {
            req.session.user = users[0];
            res.json({ code: 1, message: '登录成功', flag: users[0].flag});
        }else{
            res.json({ code: 0, message: '登录失败'});
        }
    });
});

module.exports = router;