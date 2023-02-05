const shortid = require("shortid");
const { HttpError } = require("../../helpers/error");
const { User } = require("../../models/modelUser");

const { sendEmail } = require("../../helpers/sendEmail");
const { PORT } = process.env;

const verification = async (email) => {
  const user = await User.findOne({ email });
  console.log(user);

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  user.verificationToken = shortid.generate();

  await user.save();

  await sendEmail({
    to: user.email,
    subject: "Thank you for your registration!",
    html: `<h1>Please,   <a href="http://localhost:${PORT}/api/users/verify/${user.verificationToken}" target="_blank"</a>confirm your email address</h1>`,
  });
};

module.exports = {
  verification,
};
