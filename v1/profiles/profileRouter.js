const express = require("express");
const ProfileController = require("./profileController");
const router = express.Router();
const {check} = require("express-validator");

router.get("/", ProfileController.GetProfiles);

// first_name, last_name, password, email, location
router.post("/", [
        check("first_name").not().isEmpty().withMessage("First name is required"),
        check("last_name").not().isEmpty().withMessage("First name is required"),
        check('password').not().isEmpty().withMessage("Password cannot be empty")
            .isLength({min: 6}).withMessage("Password must be at least 8 characters")
            .matches(/^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=.*[!-\/:-@\[-`{-~]).{8,}$/i)
            .withMessage("Your password must at least have two letters " +
                "at least two numbers and " +
                "at least one special character (any special character)"),
        check('email').not().isEmpty().withMessage("Please provide an email address")
            .isEmail().normalizeEmail().withMessage('Please enter a valid email'),
        check("location").not().isEmpty().withMessage("Please provide a location")
    ],
    ProfileController.AddNewProfile
)
;
module.exports = router;