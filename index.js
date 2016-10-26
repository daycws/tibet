var express=require('express');
var app=express();
app.use(require('body-parser')());//POST请求中间件
app.set('port',process.env.PORT||3008);

//静态资源设置
app.use(express.static(__dirname+'/public'));

//配置路由
app.get('/',function(req,res){
    res.type('text/html');
    res.send('<span style="color: green">Welcome to my Site</span>');
});

//GET请求路由
app.get('/test',function(req,res){
    if(req.query.t){
        //null undefined false NaN "" '' 0
        res.write('时间：'+Date.now());
        res.end();
    }else{
        res.send('<p>这是p里面的文本<p>');
        res.end();
    }
});
//output请求
app.post('/output-post',function(req,res){
    if(req.nicname=="123456"){
        res.write(req.body.nicname);
        res.send();
    }
    else{
        res.write("账号可用");
        res.send();
    }
});

//POST请求路由
app.post('/test-post',function(req,res){
    res.write('Hello '+req.body.fname+' '+req.body.lname+'===今天学的怎么样?');
    res.send();
});

//注册路由
app.post('/register',function(req,res){
    res.write('邮箱：'+req.body.email+'昵称'+req.body.nicname+'密码'+req.body.pass);
    res.send();
});
//登录路由
app.post('/logIn',function(req,res){
    res.write(req.body.email+req.body.pass);
    res.send();
});

//定制404页面
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.send('<span style="color:red">404 - NOT Found</span>');
});

//定制500页面
app.use(function(err,req,res,next) {
    console,error(err,stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'),function(){
    console.log('Express started on ' + 'http://localhost:'+app.get('port')+'press Ctrl-C to terminate.');
});