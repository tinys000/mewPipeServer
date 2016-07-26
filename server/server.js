var path = require('path');
var express = require('express');
var session = require('express-session');

md5 = require('MD5');
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
formidable = require('formidable');
var cors = require('cors');

shortid = require('shortid');
util = require('util');
execute = require('executer');

app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
//config
app.use(express.static('public'));
app.use(cors());
mongoose.connect('mongodb://localhost/mew_pipe');

// import models
models = require('./models');

// routing
require('./routing/users');
require('./routing/videos');






app.listen(8080);