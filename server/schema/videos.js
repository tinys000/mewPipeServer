exports.schema = new mongoose.Schema({
    hash : String,
    uploadDate : { type: Date, default: Date.now },
    description : String,
    nbView : { type: Number, default: 0},
    likeCount : { type: Number, default: 0},
    dislikeCount : { type: Number, default: 0},
    confidentialityId : { type: Number},
    userId : { type: Number},
    name: String,
    shareCount : { type: Number, default: 0}
})