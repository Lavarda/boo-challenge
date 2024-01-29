'use strict';

const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

async function bootstrap() {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    await mongoose.connect(uri);
}

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/profile', require('./routes/profile')());
app.use('/comment', require('./routes/comment')());
app.use('/vote', require('./routes/vote')());

// start server
bootstrap().then( () => {
    app.listen(port);
}).catch( (err) => {
    console.error(err);
    throw new Error(err);
})

console.log('Express started. Listening on %s', port);

module.exports = app;
