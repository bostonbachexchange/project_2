const mongoose = require('./connection')

const { Schema, model } = mongoose

const assignmentSchema = new Schema({
    instrument: String,
    teacher: String,
    date: Date,
    technique: String,
    sight_reading: String,
    book: String,
    notes: String,
    username: {
        type: String,
        default: ""
    },
 }, {
        timestamps: true
})

const Assignment = model('Assignment', assignmentSchema)

module.exports = Assignment