const express = require('express');
const app = express();
// const { 
//     connectRedis
//  } = require('./connect-redis');

// const { get, set, setnx, incrby, exists } = require('./model.redis');
// const { order } = require('./service');

app.get('/order', async (req, res) => {
    // const time = new Date().getTime();
    // console.log("time::", time);

    // const username = "vy";
    // // const getKey = await exists(username);

    // const number = await incrby(username, 10);

    // console.log(number)

    // // if (!getKey) {
    // // await setnx(username, 0);
    // // }

    // const balance = 1;
    // const finalBalance = await incrby(username, balance);
    // console.log(finalBalance);

    return res.json({
        status: 200,
        mg: 'ok',
    })
});

app.listen(3000, async () => {
    // await connectRedis();
    console.log("server is running port 8080");
});