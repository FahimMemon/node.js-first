const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://Fahim:fbhacker123@cluster-xjo8z.mongodb.net/main?retryWrites=true&w=majority"

mongoose.connect(mongoURI)

module.exports = mongoose