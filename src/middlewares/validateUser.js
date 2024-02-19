const validateUser = (req, res, next) => {
  const { firstname, lastname, email, city, language } = req.body;
  const errors = [];

  if (firstname == null) {
    errors.push({ field: "firstname", message: "First name is required" });
  } else if (firstname.length >= 255) {
    errors.push({
      field: "firstname",
      message: "Should contain less than 255 characters",
    });
  }

  if (lastname == null) {
    errors.push({ field: "lastname", message: "Last name is required" });
  } else if (lastname.length >= 255) {
    errors.push({
      field: "lastname",
      message: "Should contain less than 255 characters",
    });
  }

  if (email == null) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (email.length >= 255) {
    errors.push({
      field: "email",
      message: "Should contain less than 255 characters",
    });
  } else {
    const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      errors.push({ field: "email", message: "Invalid email" });
    }
  }
  if (city.length >= 255) {
    errors.push({
      field: "city",
      message: "Should contain less than 255 characters",
    });
  }
  if (language.length >= 255) {
    errors.push({
      field: "language",
      message: "Should contain less than 255 characters",
    });
  }
//No additionnal validation for city and language as they can be NULL
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = validateUser;
