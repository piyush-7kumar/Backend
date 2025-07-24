const { getQueryErrors } = require("../validators/users.validators");

const userSearchValidator = (req, res, next) => {
  const { gender, age } = req.query;
  const { error } = getQueryErrors({
    gender,
    age: age && Number(age),
  });
  if (error) return res.status(400).send({ message: error.details[0].message });
  next();
};

module.exports = userSearchValidator;