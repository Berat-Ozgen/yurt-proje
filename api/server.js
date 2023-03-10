const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const AuthRouters = require('./Routes/AuthRouters.js');
const UserRouters = require('./Routes/User.js');

app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://root:root@cluster0.jjbnd66.mongodb.net/?retryWrites=true&w=majority/deneme'
    );
    console.log('connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect');
  }
};

app.use('/api/auth', AuthRouters);
app.use('/api/users', UserRouters);

app.listen(8000, () => {
  console.log('8000 port listening on');
  connect();
});
