require('dotenv').config();
const axios = require('axios');
const { BREWERY_DB_KEY } = process.env;

module.exports = {
  getRandom: (req, res) => {
    axios

      .get(
        `https://sandbox-api.brewerydb.com/v2/beer/random/?key=${BREWERY_DB_KEY}`
      )
      .then(result => res.send(result.data))
      .catch(function(error) {
        console.log(error);
      });
  }
};
