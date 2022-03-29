const mongoose = require('mongoose')
const Schema  = mongoose.Schema;


const serviceSchema = new Schema({
_id: mongoose.Schema.Types.ObjectId,
storeid: {type: mongoose.Schema.Types.ObjectId,ref:"store"},
service_provider: String,
service_name:String,
service_cost:Number,
service_description:String,
service_image:String,
estimated_staytime:Number,
servicesub_option:String,
isservice_discount: Boolean,
isservice_avialable:Boolean,
CreatedAt:{type: Date ,default: Date.now},
UpdatedAt:{type: Date ,default: Date.now},






})





module.exports = mongoose.model('service',serviceSchema)