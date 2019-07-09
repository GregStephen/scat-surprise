import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getScat = userId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/scats.json?orderBy="uid"&equalTo="${userId}"`)
    .then((results) => {
      const scatResults = results.data;
      const scats = [];
      if (scatResults !== null) {
        Object.keys(scatResults).forEach((scatId) => {
          scatResults[scatId].id = scatId;
          scats.push(scatResults[scatId]);
        });
      }
      resolve(scats);
    })
    .catch(err => reject(err));
});

const getSingleScat = scatId => axios.get(`${firebaseUrl}/scats/${scatId}.json`);

const deleteScatFromTheDatabase = scatId => axios.delete(`${firebaseUrl}/scats/${scatId}.json`);

export default { getScat, deleteScatFromTheDatabase, getSingleScat };
