const express = require('express');
const app = express();


app.use(express.static('public'));
const port = process.env.port || 3456;
app.listen(port, () => console.log('Listening', port));
