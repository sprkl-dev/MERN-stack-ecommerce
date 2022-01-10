require('@sprkl/sprkl').init('sprkl');
const express = require('express');
const app = express();
const port = 7777;

app.get('/', (req, res) => {
    res.send('demo');
});

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
});
