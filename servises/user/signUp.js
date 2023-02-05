const gravatar = require("gravatar");
const shortid = require("shortid");
const { User } = require("../../models/modelUser");
const { HttpError } = require("../../helpers/error");
const { sendEmail } = require("../../helpers/sendEmail");

const signUp = async (email, password, data) => {
  const avatarURL = gravatar.url(email, { s: "200" });
  const verificationToken = shortid.generate();

  try {
    const user = new User({
      email,
      password,
      avatarURL,
      verificationToken,
      ...data,
    });

    await user.save();

    await sendEmail({
      to: user.email,
      subject: "Thank you for your registration!",
      html: `<h1>Please,   <a href="http://localhost:${process.env.PORT}/api/users/verify/${verificationToken}" target="_blank"</a>confirm your email address</h1>`,
    });

    return user;
  } catch (err) {
    if (err.code === 11000) {
      throw HttpError(409, `Email in use, code:${err.code}`);
    }

    throw HttpError(409, err);
  }
};

module.exports = {
  signUp,
};
