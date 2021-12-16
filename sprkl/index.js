require('@sprkl/gitelemetry').init('sprkl');
const express = require('express');
const req = require('express/lib/request');
const route = require("./route")
const mongoose = require('mongoose');

const app = express();
const port = 7777;

//db connect
// console.log(process.env.MONGODB_URI );
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


app.get('/', (req, res) => {
    res.send('demo');
    route.increment();
});

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
});
