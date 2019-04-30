const express = require('express');
const beerCtrl = require('./controllers/beer_controller');
const { json } = require('body-parser');

const cors = require('cors');
const app = express();
app.use(json());
app.use(cors());

//beer
app.get('/beer/random', beerCtrl.getRandom);

app.listen(8000, () => {
  console.log('Server started!');
});
