const { Router } = require('express');
const DevController = require('./controllers/DevController');
const ConcessionariaController = require('./controllers/ConcessionariaController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store)

// concessionarias
routes.get('/concessionarias', ConcessionariaController.index);
routes.post('/concessionarias', ConcessionariaController.store);

routes.get('/search', SearchController.index)

module.exports = routes