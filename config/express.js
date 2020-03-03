var bodyParser = require('body-parser');
var load = require('express-load');
var express = require('express');
//var home = require ('../app/routes/home');

module.exports  = function(){
    var app = express();

    app.set('port', 3000);

    //Middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());
    app.use(require('method-override'));
    
    //app.set ('view engine', 'ejs');
    //app.set ('views', './app/views');

    //Definir Engine para view
    app.set('view engine', 'ejs');
    app.set('views', './app/views')

    //Carregar pastas
    load('models', {cwd: 'app'}).then ('controllers').then('routers').into(app);

    //home(app);
    return(app);
};