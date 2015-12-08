//
///**
// * Module dependencies.
// */
//
//var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
//var http = require('http');
//var path = require('path');
//
//var app = express();
//
//// all environments
//app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));
//
//// development only
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}
//
//app.get('/', routes.index);
//app.get('/users', user.list);
//
//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});


var express = require("express")//这里主要是引用所必须要的模块，当然，这些模块是需要使用"npm install 模块名"安装的
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')//定义了一些路径和所用到的引擎
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: true}))
//app.use(require('body-parser').urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname,'bower_components')))
app.use(express.static(__dirname + '/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.listen(port);

console.log('imooc started on port ' + port);

//index page    这里以及下面皆是路由以及赋值，这里的字段如title, poster等都会在相应的jade如index.jade中用到，实际上是将这里的值传入相应的jade以渲染页面
app.get('/', function (req, res) {
    res.render('index', {
        title: 'imooc 首页',
        movies: [{
            title: "复仇者联盟2",
            _id: 1,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 2,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 3,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 4,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 5,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }]
    })
})

//detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imooc 详情',
        movie: {
            doctor: '乔斯·韦登',
            country: '美国',
            title: '复仇者联盟2',
            year: '2015',
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg',
            language: '英语',
            flash: 'http://v.youku.com/v_show/id_XODc4NDY0MjA4.html',
            summary: '影片讲述当钢铁侠试图启动处于休眠状态的维持和平计划时，事情出了差错。于是，在地球面临生死存亡的紧急关头时，强大的超级英雄们挺身而出承担起拯救世界的重任，他们将阻止可怕的人工智能机器人“奥创”制定恐怖计划。'
        }
    })
})
//admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    })
})
//list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'imooc 列表页',
        movies: [{
            doctor: '乔斯·韦登',
            country: '美国',
            title: '复仇者联盟2',
            year: '2015',
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg',
            language: '英语',
            flash: 'http://v.youku.com/v_show/id_XODc4NDY0MjA4.html',
            summary: '影片讲述当钢铁侠试图启动处于休眠状态的维持和平计划时，事情出了差错。于是，在地球面临生死存亡的紧急关头时，强大的超级英雄们挺身而出承担起拯救世界的重任，他们将阻止可怕的人工智能机器人“奥创”制定恐怖计划。'
        }]
    })
})