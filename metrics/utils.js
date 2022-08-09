const Metrics = require('./models/metric')
const data = require('./seed');
const axios = require('axios');
const http = require('http')

let seeded = false;

async function seed() {
    if (!seeded) {
        //console.log("Seeding")
        await Metrics.insertMany(data.metrics)
        seeded = true;
    }
}

async function getMetrics() {
    await seed();

    const current = await Metrics.findOne();
    return current;
}

async function setMetrics(metrics) {
    await seed();

    const current = await Metrics.updateOne(metrics);
    return current;
}

async function retrieveMetrics() {
    await new Promise(resolve => setTimeout(resolve, 5));
   const res = await axios.get('http://localhost:7777/metrics');
   return res;
}

async function updateMetrics(metrics) {
    const res = await axios.post('http://localhost:7777/metrics', metrics)
}

module.exports.getMetrics = getMetrics;
module.exports.setMetrics = setMetrics;
module.exports.retrieveMetrics = retrieveMetrics;
module.exports.updateMetrics = updateMetrics;
