const ProfilesRoute = require("../v1/profiles/profileRouter");

exports.ProfilesRouteHandler = (app) => {

    app.use("/v1/profiles/", ProfilesRoute);

}