import { ObjectId } from 'mongoose'
import User from '../models/User'

class UserDao {
  session: any
  constructor(_session?: any) {
    this.session = _session
  }

  async getUsers(filter?: any) {
    return new Promise((resolve, reject) => {
      User.find(filter)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }

  async getUserById(id: ObjectId | string) {
    return new Promise((resolve, reject) => {
      User.findById(id)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }

  async getUserByEmail(email: string) {
    return new Promise((resolve, reject) => {
      User.find({ email })
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }

  async create(data: any) {
    return new Promise((resolve, reject) => {
      new User(data)
        .save()
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }

  async update(id: ObjectId | string, data: any) {
    return new Promise((resolve, reject) => {
      const options: any = { new: true }
      if (this.session) options.session = this.session
      User.findByIdAndUpdate(id, data, options)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }

  async delete(id: ObjectId | string) {
    return new Promise((resolve, reject) => {
      User.findByIdAndDelete(id)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
}

export default UserDao
