const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { HttpError } = require("../../helpers/error");
const { User } = require("../../models/modelUser");

const logIn = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      throw HttpError(401, `No user with email '${email}' found`);
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw HttpError(401, "Wrong password");
    }

    if (!user.verify) {
      throw HttpError(401, "Unauthorized");
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET
    );

    await User.findByIdAndUpdate(user._id, { token });

    user.token = token;

    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { logIn };
