const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");
const db = require("./module/db");
const tools = require("./module/tools");
const app = express();

app.use(bodyParser.json());

//登录接口
app.post("/login", (req, res) => {
    /**
     * 登陆思路
     * 1、接收参数 adminName,passWord
     * 2、去数据库当中进行搜索
     *      1、查找到，登陆成功
     *          1、增加登陆日志
     *              返回内容：
     *                  {
     *
     *                  }
     *      2、未找到，登陆失败*/
    const { adminName, passWord } = req.body;
    console.log(adminName, passWord);
    console.log(req.body);
    db.findOne("adminList", {
        adminName,
        passWord: md5(passWord + ")(*&%&%^")
    }, function (err, info) {
        if(err) tools.json(res);
        else{
            setTimeout(()=>{
                if(info){
                    tools.json(res,1,"登录成功");
                }else{
                    tools.json(res,-1,"账号或密码错误");
                }
            },1000)
        }
    }
    )
});

app.listen(3000, function () {
    console.log("success");
})