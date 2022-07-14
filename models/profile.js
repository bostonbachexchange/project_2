const mongoose = require('./connection')

const { Schema, model } = mongoose

const profileSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    age: Number,
    dob: Date,
    instruments: String,
    username: {
        type: String,
        default: ""
    },
 }, {
        timestamps: true
})

const Profile = model('Profile', profileSchema)

module.exports = Profile