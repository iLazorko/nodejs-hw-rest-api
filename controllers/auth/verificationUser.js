const { HttpError } = require("../../helpers/error");
const { verification } = require("../../servises/user");

const verificationUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, "missing required field email");
  }

  await verification(email);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = {
  verificationUser,
};
