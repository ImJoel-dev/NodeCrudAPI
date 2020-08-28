const ProfileModel = require("./profileModel");
const SendEmail = require("../middleware/MailAPI");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");

exports.GetProfiles = async (req, res, next) => {
    try {


        const Profiles = await ProfileModel.find().select("-hashed_password");


        if (!Profiles) {
            return res.status("404").json({
                message: "There was an error fetching a list of profiles"
            });
        }

        return res.status(200).json({
            error: false,
            data: Profiles
        })

    } catch (ex) {
        next(ex);
    }
}

exports.AddNewProfile = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const requestErrors = errors.array();
        return res.status("400").json({
            error: true,
            requestErrors
        });
    }

    const {first_name, last_name, password, email, location} = req.body;


    const isUserAvailable = await ProfileModel.findOne({email: email});

    if (isUserAvailable) {
        return res.status(403).json({
            error: true,
            message: "This email is already registered"
        })
    }


    const hashed_password = await bcrypt.hashSync(
        password,
        10
    );


    const user = new ProfileModel({
        first_name,
        last_name,
        hashed_password,
        email,
        location
    });


    const SavedUser = await user.save();

    if (!SavedUser) {
        return res.status(400).json({
            error: true,
            message: "There was an error saving the user"
        })
    }

    SendEmail(
        email,
        "Welcome to my API",
        "This is a simple API to create users and send emails"
    );

    return res.status(200).json({
        error: false,
        profile: {
            first_name,
            last_name,
            email,
            location
        }
    })


}