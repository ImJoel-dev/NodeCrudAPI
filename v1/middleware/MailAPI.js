const sgMail = require('@sendgrid/mail');

function SendEmail(To, Subject, Message) {

    sgMail.setApiKey('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');

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