var users = require('../schema/users');
var videos = require('../schema/videos');

exports.User = mongoose.model('User', users.schema);

exports.Video = mongoose.model('Video', videos.schema);