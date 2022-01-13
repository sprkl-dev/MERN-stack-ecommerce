const express = require('express');
const req = require('express/lib/request');
const route = require("./route")
const mongoose = require('mongoose');
const utils = require('./utils')

const app = express();
app.use(express.json());

const port = 7777;

//db connect
// console.log(process.env.MONGODB_URI );
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.put('/', async (req, res) => {
});

app.get('/metrics', async (req, res) => {
    const metrics = await utils.getMetrics();
    res.send({
        totalCounter : metrics.totalCounter,
        saturdaysCounter : metrics.saturdaysCounter
    });
})

app.post('/metrics', async (req, res) => {
    try {
        const metrics = {
            totalCounter: req.body.totalCounter,
            saturdaysCounter: req.body.saturdaysCounter
        }
        await utils.setMetrics(metrics);
        res.sendStatus(200);
    } catch (ex) {
        res.sendStatus(404);
    }
})

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
});
