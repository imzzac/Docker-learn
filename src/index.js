const express = require('express');
const mongoose = require('mongoose');

// connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = '172.27.0.2'

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@mongo:${DB_PORT}`;
mongoose
.connect(URI)
.then(() => console.log('connect to db...'))
.catch((err) => console.log('failed to connect to db: ', err));


const PORT = process.env.PORT || 4000;
const app = express();


app.get('/', (req,res) => res.send('<h1> Hello ZZ  hi</h1>'));

app.listen(PORT, ()=> console.log(`app is running on port : ${PORT}`));