const winston = require("winston");

exports.AppLogger = () => {
    winston.add(new winston.transports.File({filename: 'logs/logs.txt'}));


    process.on('unhandledRejection', (reason, p) => {

        winston.error(reason, p)

    }).on('uncaughtException', err => {

        winston.error(err.message, err)
    });

}
