let { get, set, setnx, incrby, exists } = require('./model.redis');

const order = async () => {
    const time = new Date().getTime();
    // console.log("time::", time);

    const username = "vy";
    // const getKey = await exists(username);
    try {
        await set("a", 1)
        const a = await get('a');
        console.log('asdfasdfsdfsd');
    } catch (Err) {
        console.log(Err);
    }

    // if (!getKey) {
    // await setnx(username, 0);
    // // }

    // const balance = 1;
    // const finalBalance = await incrby(username, balance);
    // console.log(finalBalance);
}

module.exports = {
    order,
}