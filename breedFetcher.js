const request = require('request');

const apiUrl = 'https://api.thecatapi.com/v1/breeds/';
const brokenUrl = 'qeiruhgqrke3';


const fetchBreedDescription = (searchString, callback) => {
  request(apiUrl, (error, response, body) => {
    const breedObjectList = JSON.parse(body);
    let breedDescription = '';
    breedObjectList.forEach(breedObject => {
      if (breedObject["name"] === searchString) {
        breedDescription = breedObject["description"];
      }
    });
    if (!breedDescription) {
      breedDescription = "Breed not found";
    }
    callback(error, breedDescription);
  });
};

module.exports = { fetchBreedDescription };