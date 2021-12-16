const Metrics = require('./models/metric')
const data = require('./seed');

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
}

module.exports.getMetrics = getMetrics;