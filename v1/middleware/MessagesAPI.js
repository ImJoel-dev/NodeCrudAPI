const client = require('twilio')(process.env.ACCOUNT_ID, process.env.SMS_TOKEN);
const winston = require("winston");


function SendMessage(ReceiverNumber, MessageBody) {

    client.messages
        .create({
            body: MessageBody,
            from: process.env.ACCOUNT_SMS_NUMBER,
            to: ReceiverNumber
        })
        .then((message) => {

                winston.info(err.message, message)
                return true;
            }
        ).catch((err) => {
        winston.info(err.message, err)
        return false;
    });
}


module.exports = SendMessage;