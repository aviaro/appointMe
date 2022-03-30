const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const scheduleSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeid: {
        type: mongoose.Schema.types.ObjectId,
        ref: 'Store'
    },
    accountid: {
        type: mongoose.Schema.types.objectid,
        ref: 'Account'
    },
    serviceid: {
        type: mongoose.Schema.types.object,
        ref: 'Service'
    },
    service_provider_id: {
        type: mongoose.Schema.types.object,
        ref: 'Account'
    },
    schedule_date: Date,

    fromhours: Number,
    tohours: Number,
    estimated_staytime: Number,




})





module.exports = mongoose.model('Schedule', scheduleSchema)