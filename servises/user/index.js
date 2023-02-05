const { signUp } = require("./signUp");
const { logIn } = require("./logIn");
const { logOut } = require("./logOut");
const { currentUser } = require("./currentUser");
const { uploadAvatar } = require("./uploadAvatar");
const { signupVerify } = require("./signupVerify");
const { verification } = require("./verification");

module.exports = {
  signUp,
  logIn,
  logOut,
  currentUser,
  uploadAvatar,
  signupVerify,
  verification,
};
