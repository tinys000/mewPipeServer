exports.schema = new mongoose.Schema({
    password : String,
    firstName : String,
    lastName : String,
    birthDate : { type: Date},
    email : String
})