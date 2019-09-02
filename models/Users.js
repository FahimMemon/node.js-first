const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
})

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users