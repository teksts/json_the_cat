const request = require('request');
const arg = process.argv[2];

const apiUrl = 'https://api.thecatapi.com/v1/breeds/';
const brokenUrl = 'qeiruhgqrke3';

const fetchBreed = (searchString) => {
  const breedsResourceUrl = apiUrl;
  request(breedsResourceUrl, (error, response, body) => {
    if (error) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      return;
    }
    const breedObjectList = JSON.parse(body);
    let breedFound = false;
    breedObjectList.forEach(breedObject => {
      //console.log("breed object", breedObject["name"]);
      //console.log("search string", searchString);
      if (breedObject["name"] === searchString) {
        console.log(breedObject["description"]);
        breedFound = true;
      }
    });
    if (!breedFound) {
      console.log("Breed not found");
    }
  });
};

fetchBreed(arg);