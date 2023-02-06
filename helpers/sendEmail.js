const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendEmail(data) {
  try {
    const email = {
      ...data,
      from: "inna121986@gmail.com",
    };

    await sgMail.send(email);
    console.log("success");
    return true;
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = { sendEmail };
