const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('THIS IS TEST NUMBER 2');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});