const express = require('express');
const mongoose = require('mongoose');


const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://suubmundo:NgUy7WzdgqmAuAJH@aircnc-tesgy.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Métodos de uma API Rest (GET, POST, PUT, DELETE)

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criar e edição de registros)

app.use(express.json());
app.use(routes);
app.listen(8000);