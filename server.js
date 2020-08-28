const express = require('express');
const app = express();
require("./errors/logger").AppLogger(); //Logs every error
require("dotenv").config(); //configures app to use environment variables
const errors = require("./errors/Errors");


app.use(express.urlencoded({extended: false}));
app.use(express.json());
require("./Services/app").AppConfig(app);
require("./Services/Database").ConnectToMongoDB();
require("./Services/RouteRegister").ProfilesRouteHandler(app);
app.use(errors);

app.get("*", function (req, res) {
    res.status(400).json({
        error: true,
        message:
            "Sorry, the route " + req.uri + " is not accessible or doesn't exist",
    });
});


require("./Services/Server").StartServer(app);

