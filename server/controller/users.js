exports.getAll = function(req, res){

    models.User.toString( function(err, obj){
        console.log(obj);
        res.json(obj);
    });


};

exports.getOne = function(req, res){

    models.User.findOne({name: 'Who'}, function(err, obj){
        console.log(obj);
        res.json(obj);
    });


};

exports.create = function(req, res){
    console.log(req.body);
    var form = new formidable.IncomingForm();
    console.log(form);
    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('register:\n\n');
        res.end();
        var user = models.User(fields).save();
    });
};

exports.delete = function(req, res){

};

exports.update = function(req, res){

};

