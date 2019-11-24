const axios = require('axios');

const config = require('./config');

const getStopPoints = async stopName => {
  try {
    const response = await axios({
      method: 'POST',
      url: config.url,
      params: {
        ts: new Date().getTime(),
        method: 'getStopPoints',
        p0: JSON.stringify({ pattern: stopName })
      }
    });
    if (!response.data.success) {
      throw {
        message: 'no-data'
      };
    } else
      return {
        status: 'success',
        data: response.data.success
      };
  } catch (error) {
    throw error;
  }
};

module.exports = getStopPoints;
