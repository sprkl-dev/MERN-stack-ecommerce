const Metrics = require('./models/metric')
const data = require('./seed');
const axios = require('axios');
//const { default: axios } = require('axios');

let seeded = false;

async function seed() {
    if (!seeded) {
        await Metrics.insertMany(data.metrics)
        seeded = true;
    }
}

async function getMetrics() {
    await seed();

    const current = await Metrics.findOne();
    return current;
}

async function retrieveMetrics() {
   const res = await axios.get('http://localhost:7777/metrics');
   return res;
}

module.exports.getMetrics = getMetrics;
module.exports.retrieveMetrics = retrieveMetrics;