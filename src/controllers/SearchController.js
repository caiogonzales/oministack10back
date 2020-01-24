// buscar devs num raio de 10km
// filtar por techs 
const Dev = require('../models/Concessionaria')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res){
     
        const { latitude, longitude, services } = req.query;
        const techsArray = parseStringAsArray(services)

        const devs = await Dev.find({
            services: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

      return res.json({ devs })
    }
}