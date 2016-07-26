exports.getAll = function(req, res){

    models.Video.toStringAsync( function(err, obj){
        console.log(obj);
        res.json(obj);
    });


};

exports.getByHash = function(req, res){
    models.Video.findOneAsync({hash: req.params.hash}).then(function (obj){
        var nbViewInc = obj.nbView +1;
        console.log(nbViewInc);
        models.Video.update({ hash : req.params.hash}, { nbView : nbViewInc}, { multi : true }, function (err) {
            if (err) { throw err; }
            console.log('ok');
        });
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHeader(200, {"Content-Type": "text/json"});
        res.write(JSON.stringify(obj));
        res.end();
    });
};

exports.getByView = function(req, res){
    models.Video.find().sort({nbView: -1}).execAsync().then(function (obj){
        //console.log(obj);
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHeader(200, {"Content-Type": "text/json"});
        res.write(JSON.stringify(obj));
        res.end();
    });


};

exports.delete = function(req, res){
    var videoFile = "public/video/" + req.params.hash + ".mp4";
    var thumbFile = "public/video/thumb/" + req.params.hash + ".jpg";
    models.Video.findOneAndRemove({hash: req.params.hash}).then(function (obj){
        fs.unlinkSync(videoFile);
        fs.unlinkSync(thumbFile);
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHeader(200, {"Content-Type": "text/json"});
        res.end();
    });
};


exports.addVideo = function(req, res){
    var form = new formidable.IncomingForm();
    var fileName = shortid.generate();
    console.log(form);
    form.uploadDir = "public/video/";
    form.keepExtensions = true;
    form.on('file', function(field, file) {
        //rename the incoming file to the file's name
        fs.rename(file.path, form.uploadDir + "/" + fileName + ".mp4");
    });
    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
        fields.hash = fileName;
        var video = models.Video(fields).save();
        execute("ffmpeg -i public/video/"+fileName+".mp4 -ss 00:40 -r 1 -an -vframes 1 -f mjpeg public/video/thumb/"+fileName+".jpg", function(err){
        console.log(err);
        });
    });
};

exports.update = function(req, res){
    models.Video.findOne({hash: req.params.hash}).then(function (obj){
        console.log(obj.name);
        console.log(req.body.name);
        models.Video.update({ name : obj.name, description : obj.description}, { name : req.body.name, description : req.body.description}, { multi : true }, function (err) {
            if (err) { throw err; }
            console.log('Pseudos modifiés !');
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('Modified:\n\n');
            res.end();
        });
    });


};



