const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    biyografi: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'https://picsum.photos/200/200',
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
