const nodemailer = require("nodemailer");

const { USER_MAIL, USER_PASSWORD } = require("../config/credentials");

const SMPT_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";

const SENDER_EMAIL = USER_MAIL;
const RECEIVER_EMAIL = "vandana19@navgurukul.org";

const CC = []; //Same emails to multiple users copy  Carbon Copy
const BCC = []; //Bind carbon copy hide the list of recipient email in receiver mailbox

const EMAIL_SUBJECT = "HAPPY BIRTHDAY";
const EMAIL_BODY_HTML = "<h1>Happy Birthday</h1>";

const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc: CC,
    bcc: BCC, //Wrong in tutorial (bb) -> bcc
    subject: EMAIL_SUBJECT,
    html: EMAIL_BODY_HTML,
};

const hello = () => {
    console.log(USER_MAIL, USER_PASSWORD);
};

const transporter = nodemailer.createTransport({
    host: HOST_SERVICE,
    port: SMPT_PORT,
    secure: false,
    auth: {
        user: USER_MAIL,
        pass: USER_PASSWORD,
    },
});

module.exports = {
    options,
    transporter,
    hello
}
