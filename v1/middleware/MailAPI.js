const sgMail = require('@sendgrid/mail');

function SendEmail(To, Subject, Message) {

    sgMail.setApiKey(process.env.API_KEY);

    const msg = {
        from: "test@put-your-domain.com",
        to: To,
        subject: Subject,
        text: Message,
        html: Message,
    };
    sgMail.send(msg).then((data) => {


        console.log(data.response.body);
        winston.info(err.message, data.response)
        return true;

    }).catch((error) => {
        console.log(error.response.body);
        winston.info(err.message, error)
        return false;

    });
}

module.exports = SendEmail;