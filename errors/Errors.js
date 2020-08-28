const winston = require("winston");

module.exports = function (err, req, res, next) {

    console.log(err);
    winston.error(err.message, err)

    res.status(500).json({
        error: true,
        message: "There was an internal server error."

    });
}