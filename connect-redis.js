// @ts-check

const { createClient } = require('redis');

// const { redisConfig } = require('../config');
// const logger = require('./logger');

let client;

async function connectRedis() {
    client = createClient({
        url: 'redis://127.0.0.1:6379',
    });

    client.on('error', err => {
        // logger.error('redis error', err);
    });

    await client.connect();
    // logger.info('redis connected');
    console.log('redis connected');
}

function getRedisClient() {
    if (!client) {
        console.log('not connnect');
        // logger.error('lost connection to redis');
        return;
    }
    return client;
}

module.exports = {
    connectRedis,
    getRedisClient,
};
