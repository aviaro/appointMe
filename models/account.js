const mongoose = require('mongoose')
const Schema = mongoose.Schema


const accountSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    associateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    firstname: String,
    lastname: String,
    password: String,
    mobile: String,
    email: String,
    isbusiness: {
        type: Boolean,
        default: false
    },
    createdAt: {
        Type: Date,
        default: Date.now
    },
    isBusiness: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    isLocked: {
        type: Boolean,
        default: false
    },





})

module.exports = mongoose.model('Account', accountSchema)