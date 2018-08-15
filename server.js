const express = require('express');
const bodyparse = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const route = require('./route/controller');
const db = require('./config/database').mongoURI;


// init express;
const app = express();
app.use(bodyparse.json());

// init route func;
route(app);
// connect to mongodb;
mongoose.connect(db)
    .then(()=> console.log('connected to mongodb....'))
    .catch(err=> console.log('ERROR: ',err));

// create server;
app.listen(port,
    ()=> console.log('server started on port '+port));