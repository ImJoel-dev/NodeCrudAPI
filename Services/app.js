const cors = require('cors');
const helmet = require('helmet');
const morgan = require("morgan");
require("dotenv").config();
const errors = require("../errors/Errors");

exports.AppConfig = (app) => {

    app.use(cors());
    app.use(helmet());



    if (process.env.ENV === "DEV") {
        app.use(errors);
        app.use(morgan('tiny'));
    }


}

