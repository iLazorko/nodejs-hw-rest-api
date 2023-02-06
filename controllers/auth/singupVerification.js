const { signupVerify } = require("../../servises/user");

async function singupVerification(req, res, next) {
  const { verificationToken } = req.params;
  try {
    await signupVerify(verificationToken);
    res.status(200).json({
      message: "Verification successful!!!",
    });
  } catch (error) {
    console.log(error);
    next();
  }
}

module.exports = { singupVerification };
