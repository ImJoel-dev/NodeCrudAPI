const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const _ProfileModel = new Schema({
    user_id: {
        type: String,
        default: mongoose.Types.ObjectId()
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    hashed_password: {
        type: String,
        match: /^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=.*[!-\/:-@\[-`{-~]).{8,}$/i,
        required: false
    },
    location: {
        type: String,
        required: true,
    },
    date_created: {
        type: Date,
        default: Date.now(),
        required: false
    },
});

const ProfileModel = mongoose.model("user_profile", _ProfileModel);

module.exports = ProfileModel;