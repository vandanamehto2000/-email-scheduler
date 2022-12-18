const express = require("express");
const app = express();

const { transporter, options } = require("./services/email");

const scheduler = require("node-cron");

const PORT = 1338;
scheduler.schedule("* * * * * *", () => {
    console.log("sending email");
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.error(err);
        }
        console.log("email sent", info);
    });
});

app.listen(PORT, () => {
    console.log("App is runnig")
});