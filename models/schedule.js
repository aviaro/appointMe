const mongoose = require('mongoose')
const Schema  =mongoose.Schema;


const scheduleSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeid: {type: mongoose.Schema.types.ObjectId,ref: 'store'},
    accountid: {type: mongoose.Schema.types.objectid,ref:'Account'},
    serviceid: {type: mongoose.Schema.types.object,ref:'Service'},
    service_provider: String,ref:'service',
    schedule_date: Date,
    fromhours: Number,
    tohours: Number,
    estimated_staytime: Number,




})





module.exports = mongoose.model('schedule',scheduleSchema)