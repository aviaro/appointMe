const { type } = require('express/lib/response')
const moongoose = require('mongoose')
const schema = moongoose.schema


const accountSchema = new schema ({
    _id:moongoose.Schema.Types.ObjectId,
    associateId:{type:moongoose.Schema.Types.ObjectId,ref:'Account'},
    firstname: String,
    lastname:String,
    email:String,
    isbusiness:{type: Boolean, default:false},
    createdAt:{Type:Date, default:Date.now},
    




})