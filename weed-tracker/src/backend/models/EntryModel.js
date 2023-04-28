const mongoose = require('mongoose')

const entrySchema = mongoose.Schema({
    Strain: {
        type: String,
        required: true
    },
    CannabisType: {
        type: String,
        required: true
    },
    StrainType: {
        type: String,
        required: true
    },
    Potency: {
        type: Number,
        required: true
    },
    Cultivator: {
        type: String,
        required: true
    },
    Aroma: {
        type: String,
        required: true
    },
    Effect: {
        type: String,
        required: true
    },
    Notes: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Weed', entrySchema)