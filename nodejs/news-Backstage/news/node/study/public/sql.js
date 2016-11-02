var mysql = require('mysql');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty');
var multipartMiddleware = multiparty();
var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var AVATAR_UPLOAD_FOLDER = '/avatar/';
// 跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 百度手机页面请求
app.post('/selected', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });



    connection.connect();

    connection.query('SELECT * FROM news_surface where newsfl="精选"', function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);


    });
    connection.end();
});
app.post('/selected1', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });



    connection.connect();
    connection.query('SELECT * FROM news_surface where newsfl="百家"', function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);


    });
    connection.end();
});

app.post('/selected2', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });



    connection.connect();
    connection.query('SELECT * FROM news_surface where newsfl="本地"', function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);


    });
    connection.end();
});
app.post('/selected3', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });



    connection.connect();
    connection.query('SELECT * FROM news_surface where newsfl="奥运"', function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);


    });
    connection.end();
});
app.post('/selected4', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });



    connection.connect();
    connection.query('SELECT * FROM news_surface where newsfl="娱乐"', function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);


    });
    connection.end();
});


// 后端请求
var tp;
app.post('/_news1', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });



    connection.connect();

    connection.query('SELECT * FROM news_surface', function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);


    });
    connection.end();
});

//点击查询进行查询

app.post('/btnnewsxx', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });

    connection.connect();
    var textnews = req.body.textnews;
    console.log(textnews);

    var sql = 'SELECT * FROM news_surface where newstite=' + "\"" + textnews + "\"";
    console.log(sql);
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);
        console.log(rows);


    });
    connection.end();
});

// 修改
app.post('/btnxg', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });

    connection.connect();

    var cellida = req.body.cellid;
    var newstitea = req.body.newstite;
    var newsfla = req.body.newsfl;
    var newsnamea = req.body.newsname;
    var newsdatea = req.body.newsdate;
    var newsimga = req.body.newsimg;
    var newscontenta = req.body.newscontent;
    console.log(newstitea, newsimga);

    var sql = 'SELECT * FROM news_surface where newsid=' + cellida;
    console.log(sql);
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);
        console.log(rows);


    });
    connection.end();
});
// 删除
app.post('/btnsc', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });

    connection.connect();

    var cellida = req.body.cellid;


    var sql = 'DELETE FROM news_surface WHERE newsid=' + cellida;
    console.log(sql);
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);
        console.log(rows);


    });
    connection.end();
});
//新闻添加提交后返回的数据
app.post('/btntjxg', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });

    connection.connect();
    var newsida = req.body.newsid;
    var newstitea = req.body.newstite;
    var newsfla = req.body.newsfl;
    var newsnamea = req.body.newsname;
    var newsdatea = req.body.newsdate;
    var newsimga = req.body.newsimg;
    var newscontenta = req.body.newscontent;


    var sql = "UPDATE news_surface SET newstite=" + "\'" + newstitea + "\'" + "\," + "newsfl=" + "\'" + newsfla + "\'" + "\," + "newsname=" + "\'" + newsnamea + "\'" + "\," + "newsdate=" + "\'" + newsdatea + "\'" + "\," + "newsimg=" + "\'" + newsimga + "\'" + "\," + "newscontent=" + "\'" + newscontenta + "\'" + "WHERE newsid=" + newsida;
    console.log(sql);
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);
        // console.log(rows);


    });
    connection.end();
});

app.post('/btntj', function(req, res) {
    res.status(200);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });

    connection.connect();

    var newstitea = req.body.newstite;
    var newsfla = req.body.newsfl;
    var newsnamea = req.body.newsname;
    var newsdatea = req.body.newsdate;
    var newsimga = req.body.newsimg;
    var newscontenta = req.body.newscontent;
    var sql = "INSERT INTO news_surface (newstite,newsfl,newsname,newsdate,newsimg,newscontent)VALUES (" + "\'" + newstitea + "\'" + "\," + "\'" + newsfla + "\'" + "\," + "\'" + newsnamea + "\'" + "\," + newsdatea + "\," + "\'" + newsimga + "\'" + "\," + "\'" + newscontenta + "\'" + ")";
    console.log(sql);
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;

        res.json(rows);
        // console.log(rows);


    });
    connection.end();
});

app.use(multiparty({ uploadDir: '../../../images' }));
app.post('/formdata', multipartMiddleware, function(req, res) {

    res.send(req.body, req.files, req.files.file.path);
    console.log(req.body, req.files, req.files.file.path);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });
    connection.connect();
    //     var _name=req.files.file.name;
    // fs.renameSync(req.files.file.path,_name);
    // tp = req.files.file.name;
    var td=req.files.file.path.split('\\') ;
    tp = td[td.length-1];
    console.log(tp);
    console.log(td);

    var types = req.files.file.name.split('.'); //将文件名以.分隔，取得数组最后一项作为文件后缀名。
    console.log(types);
    var date = new Date();
    var ms = req.files.file.name; 
    // console.log(req.files.file.path)
    var aaa= "..\\..\\..\\images\\";
    fs.renameSync(req.files.file.path, aaa + ms );
    console.log(req.files.file.path);
    console.log(aaa);
    // fs.rename(td,tp);      


});
app.post('/formdata1', multipartMiddleware, function(req, res) {

    res.send(req.body, req.files, req.files.file.path);
    console.log(req.body, req.files, req.files.file.path);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });
    connection.connect();
    //     var _name=req.files.file.name;
    // fs.renameSync(req.files.file.path,_name);
    // tp = req.files.file.name;
    var td=req.files.file.path.split('\\') ;
    tp = td[td.length-1];
    console.log(tp);
    console.log(td);

    var types = req.files.file.name.split('.'); //将文件名以.分隔，取得数组最后一项作为文件后缀名。
    console.log(types);
    var date = new Date();
    var ms = req.files.file.name; 
    // console.log(req.files.file.path)
    var aaa= "..\\..\\..\\images\\";
    fs.renameSync(req.files.file.path, aaa + ms );
    console.log(req.files.file.path);
    console.log(aaa);
    // fs.rename(td,tp);      


});


var server = app.listen(8082, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://127.0.0.1", host, port)

})
