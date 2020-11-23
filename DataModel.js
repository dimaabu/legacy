//to use process.env for deployment
const dotenv = require('dotenv')
dotenv.config()
//for mongo db 
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
//to check if there is a connection with db or not 
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log('connection to db sucessful')
})

//Schemas
let resturantSchema = mongoose.Schema({
    resturantName: String,
    resturantType: { type: Array },
    resturantLocation: String,
    resturantPhon: String,
    resturantImg: String,
    resturantRate: { type: Array },


})
let userSchema = mongoose.Schema({
    id: { type: Number, unique: true, sparse: true },
    userName: String,
    userMail: String,
    userPass: String,
    userNum: String,
    trips: [String],
    userimage: String,
    newsLetter: Boolean
})

let trips = mongoose.model("resturInfo", resturantSchema);
let users = mongoose.model("UserInfo", userSchema);


module.exports.users = users
module.exports.trips = trips