const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/Users.js');

// Kayıt Olma
router.post('/register', async (req, res) => {
  try {
    const { userName, lastName, email, password, gender } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await new User({
      userName,
      lastName,
      email,
      password: hash,
      gender,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// login olma
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send('User not found!');

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).send('Invalid password!');
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
