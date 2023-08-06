import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, unique: true },
  address: {
    lane1: { type: String },
    lane2: { type: String },
    area: { type: String },
    city: { type: String },
    district: { type: String },
    state: { type: String },
    country: { type: String },
    pincode: { type: String },
  },
  emailVerified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false },
  active: { type: Boolean },
})

const User = mongoose.model('User', schema)

export default User
