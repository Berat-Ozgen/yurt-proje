const router = require('express').Router();
const User = require('../models/Users.js');

// tüm kullanıcılar
router.get('/get-all-users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// tek bir kullanıcı getir
router.get('/get-users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(200).json({ message: 'oyle bir kullanı bulunamadı' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
