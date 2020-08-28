const jwt = require("jsonwebtoken");
exports.VerifyToken = (req, res, next) => {
    const token = req.headers.eliorhospitalauthtoken;



    try {
        if (!token) {
            return res.status(401).json({
                error: true,
                message: "You are not authorized to access this resource on Elior",
            });
        }

        req.userData = jwt.verify(token, process.env.JWT_ELIOR);
        next();
    } catch (e) {
        return res.status(400).json({
            error: true,
            message: "Sorry, your session has expired.",
        });
    }
};
