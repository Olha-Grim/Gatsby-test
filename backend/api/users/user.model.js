const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passwordHash: { type: String },
  },
);

module.exports = mongoose.model('User', UserSchema);