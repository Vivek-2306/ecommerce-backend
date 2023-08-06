import { encryptPassword } from '../../../utils/PasswordValidation'
import SuperManager from '../../SuperManager'
import UserDao from '../dao/UserDao'

const userDao = new UserDao()

class AuthManager extends SuperManager {
  async register() {
    const data: any = this.body
    data.password = await encryptPassword(this.body?.password)
    await userDao.create(data)
  }
}

export default AuthManager
