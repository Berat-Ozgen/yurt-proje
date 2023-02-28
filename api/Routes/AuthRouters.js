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
    res.status(500).json(error);
  }
});

module.exports = router;
