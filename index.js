const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

import '@babel/polyfill';



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'XRides Unofficial!' });
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});