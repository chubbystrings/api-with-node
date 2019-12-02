const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path')

mongoose.connect('mongodb+srv://martins:westcrew10@cluster0-mwwqm.mongodb.net/martins?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
    console.log("successfully connected to database")
})
.catch((error) => {
    console.log(error)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);




module.exports = app;