require('dotenv').config();
const axios = require('axios');
const { BREWERY_DB_KEY } = process.env;

module.exports = {
  getRandom: (req, res) => {
    axios

      .get(
        `https://sandbox-api.brewerydb.com/v2/beer/random/?key=3b3355e0b9eb965f466d634762d09cb6`
      )
      .then(result => res.send(result.data))
      .catch(function(error) {
        console.log(error);
      });
  }
};
