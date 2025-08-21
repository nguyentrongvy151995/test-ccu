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

    // day la pr1111111111111111

    // day la pr2222222222222222222


    /// day la pr3

    // day la pr4

    return res.json({
        status: 200,
        mg: 'ok',
    })
});

app.listen(8080, async () => {
    // await connectRedis();
    console.log("server is running port 8080");
});