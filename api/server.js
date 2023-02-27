const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// const connect = async () => {
//   try {
//     await mongoose.connect("url");
//     console.log('connected to MongoDB');
//   } catch (error) {
//     console.log('Failed to connect');
//   }
// };

app.listen(8000, () => {
  console.log('8000 port listening on');
});
