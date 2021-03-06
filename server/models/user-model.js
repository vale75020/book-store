const mongoose = require('mongoose')
const uuidv1 = require('uuid/v1');

const Schema = mongoose.Schema;
// const { Schema } = mongoose;

const User = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("users", User);