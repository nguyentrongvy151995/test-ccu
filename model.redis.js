// const redis = require('redis');
// const client = redis.createClient();

// const { client } = require('./connect-redis');
const { getRedisClient } = require('./connect-redis');
let client = getRedisClient();

const get = async (key) => {
    return new Promise((resolve, reject) => {
        client = getRedisClient();
        client.get(key, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

const set = async (key, count) => {
    return new Promise((resolve, reject) => {
        client = getRedisClient();
        client.set(key, count, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

const incrby = async (key, count) => {
    return new Promise((resolve, reject) => {
        client = getRedisClient();
        client.incrby(key, count, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

const decrby = async (key, count) => {
    return new Promise((resolve, reject) => {
        client = getRedisClient();
        client.decrby(key, count, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

const exists = async (key) => {
    return new Promise((resolve, reject) => {
        client = getRedisClient();
        client.exists(key, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

const setnx = async (key) => {
    return new Promise((resolve, reject) => {
        client = getRedisClient();
        console.log('client', client);
        client.setnx(key, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

module.exports = {
    get,
    set,
    incrby,
    decrby,
    exists,
    setnx,
}