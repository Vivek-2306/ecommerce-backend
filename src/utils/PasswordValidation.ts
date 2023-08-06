import bcyrpt from 'bcrypt'

export const encryptPassword = async (password: string) => {
  return await bcyrpt.hash(password, 10)
}

export const comparePassword = async (
  password: string,
  hashPassword: string,
) => {
  return await bcyrpt.compare(password, hashPassword)
}
