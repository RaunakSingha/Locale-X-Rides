const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

import '@babel/polyfill';
import User from './controllers/User';
import Auth from './middleware/Auth'
import Store from './controllers/Store';



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'XRides Unofficial!' });
});

app.post('/user/signup', User.signUp);
app.post('/user/login', User.signIn);
app.post('/user/store', Auth.verifyToken, Store.saveRideDetails);



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});