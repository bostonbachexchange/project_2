const mongoose = require('./connection')

const { Schema, model } = mongoose

const scaleSchema = new Schema({
    name: String,
    letterNames: String,
    mode: String,
    LHfingerings: String,
    RHfingerings: String,
    numberOfAccidentals: String,
    keySignature: String,
    keyboardImage: String,
    steps: String,
    username: {
        type: String,
        default: ""
    },
 }, {
        timestamps: true
})

const Scale = model('Scale', scaleSchema)

module.exports = Scale