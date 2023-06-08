const usersList = require("../utils/users");

const userLogin = (req, res) => {
  const { email, password } = req.query;

  const user = usersList.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = userLogin;
