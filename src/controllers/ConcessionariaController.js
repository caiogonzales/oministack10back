const axios = require('axios')
const Concessionaria = require('../models/Concessionaria')
const parseStringAsArray = require('../utils/parseStringAsArray')
const { findConnection, sendMessage } = require('../websocket')

module.exports = {
    async index(req, res){
        const concessionarias = await Concessionaria.find();

        return res.json(concessionarias);
    },
    async store(req,res){
        const { name, endereco, phone, email, services, latitude, longitude } = req.body

        let concessionaria = await Concessionaria.findOne({
            name
        })

        if(!concessionaria){
            const servicesArray = parseStringAsArray(services)
            const location = {
                type: 'Point',
                coordinates:[longitude, latitude],
            }

            concessionaria = await Concessionaria.create({
                name,
                endereco,
                phone,
                email,
                services: servicesArray,
                location
            })
        }

        return res.json(concessionaria);
    }
}