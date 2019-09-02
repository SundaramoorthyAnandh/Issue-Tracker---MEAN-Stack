const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let IssueModelSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    responsible:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    severity:{
        type: String,
        required: true,
        default: 'Low'
    },
    status:{
        type: String,
        required: true,
        default: 'Open'
    }
});

var Issue = mongoose.model('IssueModel', IssueModelSchema );

module.exports = Issue;