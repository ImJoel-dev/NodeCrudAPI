const winston = require("winston");

exports.StartServer = (app) => {

    const PORT = process.env.PORT || 9001;
    const PID = process.pid;

    app.listen(PORT, (err) => {
        if (err) {

            winston.info(`There was an error ${err}`);
        } else {

            console.log(`Running on ${PORT} and pid ${PID}`);
        }
    });
}