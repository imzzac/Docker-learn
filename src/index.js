const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');




const PORT = process.env.PORT || 4000;
const app = express();

// connect to db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = '172.27.0.2'

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@mongo:${DB_PORT}`;
mongoose
.connect(URI)
.then(() => console.log('connect to db...'))
.catch((err) => console.log('failed to connect to db: ', err));



// connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';

const redisClient = redis.createClient({url: `redis://${REDIS_HOST}:${REDIS_PORT}`});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis...'));
redisClient.connect();


app.get('/', (req,res) => {
    redisClient.set('products', 'products...');
    res.send('<h1>    Hello ZZ! From AWS AWS  </h1>')
});

app.get('/data', async (req, res) => {
    const products = await redisClient.get('products');
    res.send(`<h1> Hello ZZ!</h1> <h2>${products}</h2>`);
});
app.listen(PORT, ()=> console.log(`app is running on port : ${PORT}`));