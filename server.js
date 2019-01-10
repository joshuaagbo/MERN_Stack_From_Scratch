const express = require('express');
const bodyparse = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8080;
const route = require('./route/controller');
const DB = require('./config/database').mongoURI;
// init express;
const app = express();
app.use(bodyparse.json());
// serve static assets if in production;
if(process.env.NODE_ENV === 'production'){
    // set static folder;
  app.use(express.static('client/build'));
  app.use('*', (req,res)=> {
      res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
  });
}
// init route func;
route(app);
// connect to mongodb;
mongoose.connect(DB)
    .then(()=> console.log('connected to mongoDB....'))
    .catch(err=> console.log('ERROR: ',err));

// create server;
app.listen(port,
    ()=> console.log('server started on port '+port));
