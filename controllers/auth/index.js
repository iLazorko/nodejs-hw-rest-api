const { signUp } = require("./signUp");
const { logIn } = require("./logIn");
const { currentUser } = require("./currentUser");
const { logOut } = require("./logOut");
const { uploadController } = require("./upload");
const { singupVerification } = require("./singupVerification");
const { verificationUser } = require("./verificationUser");

module.exports = {
  signUp,
  logIn,
  currentUser,
  logOut,
  uploadController,
  singupVerification,
  verificationUser,
};
