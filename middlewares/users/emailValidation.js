const { HttpError } = require("../../helpers/error");
const { emailSchema } = require("../../schemas/users/emailSchema");

const emailValidation = (req, res, next) => {
  const validationResult = emailSchema.validate(req.body);

  if (validationResult.error) {
    throw HttpError(400, validationResult.error.message);
  }

  next();
};

module.exports = {
  emailValidation,
};
