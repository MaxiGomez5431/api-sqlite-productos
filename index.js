require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const db = require('./src/models');
const app = express();
const seed = require('./src/seeds/seed');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Base funcionando correctamente');
});

app.use(routes.productosRoute);
app.use(routes.fabricantesRoute);
app.use(routes.componentesRoute);

app.listen(PORT, async () => {
  //await seed();
  console.log(`Aplicación iniciada en el puerto ${PORT}`);
});