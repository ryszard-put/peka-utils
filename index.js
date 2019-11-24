// Index file
const getStopPoints = require('./lib/getStopPoints');

getStopPoints('')
  .then(({ data }) => console.log(data))
  .catch(error => console.log(error.message));

module.exports = {
  getStopPoints
};
