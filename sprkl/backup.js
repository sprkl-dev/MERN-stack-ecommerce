const { default: axios } = require("axios");

app.put('/', async (req, res) => {
    try {
        const current = await utils.retrieveMetrics();
        const metrics = {
            totalCounter : current.totalCounter,
            saturdaysCounter: current.saturdaysCounter
        }
        if (new Date().getDay() == 7) {
            metrics.saturdaysCounter++;
        } else {
            metrics.totalCounter++;
        }
        await utils.updateMetrics(metrics);
        res.sendStatus(200);
    } catch(ex) {
        res.status(401).send({ message: 'Failed updating metrics' + ex});
    }
});

const json = {
    totalCounter: metrics.totalCounter,
    saturdaysCounter: metrics.saturdaysCounter
}



async function updateMetrics() {
    try {
        axios.put('http://localhost:7777/')
    } catch(ex) {
        console.log("Failed updating metrics")
    }
}