const mongoose = require('mongoose');
const User = require('../models/User');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    const db = mongoose.connection;

    db.once('open', (err) => {
        if(err) throw err;

        User.seedAdminUser().then(() => {
            console.log('Database ready!');
        }).catch((reason) => {
            console.log('Something went wrong');
            console.log(reason);
        });
    });

    db.on('error', (err) => {
        console.log(err);
    });
}
/*
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    const db = mongoose.connection;

    db.once('open', (err) => {
        if(err) throw err
    });

    db.on('error', (err) => {
        console.log(err);
    });

    require('../models/Category');
    require('../models/Tag');
    require('../models/Sticker');
}
*/ 