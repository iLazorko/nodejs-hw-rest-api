const { User } = require("../../models/modelUser");
const { HttpError } = require("../../helpers/error");
const { sendEmail } = require("../../helpers/sendEmail");

const signupVerify = async (verificationToken) => {
  const user = await User.findOne({
    verificationToken,
    verify: false,
  });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  user.verify = true;
  user.verificationToken = "null";

  await user.save();

  await sendEmail({
    to: user.email,
    subject: "Thank you for your registration!",
    html: "Registration successful",
  });
};

module.exports = {
  signupVerify,
};
