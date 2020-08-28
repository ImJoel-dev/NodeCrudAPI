const mongoose = require("mongoose");
exports.ConnectToMongoDB = () => {
    mongoose.set("useCreateIndex", true);
    mongoose
        .connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("Connected to database");
            winston.info(`Database connected`, `Running on ${PORT} and pid ${PID}`);
        });
}
