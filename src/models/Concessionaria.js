const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const ConcessionariaSchema = new mongoose.Schema({
    name: String,
    endereco: String,
    phone: String,
    email: String,
    services:[String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Concessionaria', ConcessionariaSchema)