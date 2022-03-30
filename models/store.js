const mongoose = require('mongoose')
const Schema = mongoose.Schema


const storeSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    associatedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    storeDescription: String,
    Storename: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    },
    contactInfo: {
        email: String,
        mobile: String,
        landline: String,
        city: String,
        address: String,
        latitude: String,
        longtitude: String
    },
    workingHours: [{
        day: Number,
        fromHour: String,
        toHour: String,
        IsOpen: Boolean
    }],
    logo: {
        type: String,
        default: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    },
    isLocked: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model('Store', storeSchema)