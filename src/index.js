const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb://localhost/week10', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{ console.log('connectado ao banco')})
        .catch((err)=>{ console.log("erro ao connectar"+err) })

app.use(cors());
app.use(express.json());
app.use(routes)
// métodos HTTP: GET, POST, PUT, DELETE

// tipos de parametros:
// Query Params: req.query(filtros, ordenação, paginação)
// Route Params: req.params (identiciar um recurso na alteracao ou remocao)
// Body: request.body (Dados para criação ou alteração de um registro  )




app.listen(3333);