import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UsersController {
  public async index() {
    const users = User.all()

    return users
  }

  public async create({ request }: HttpContextContract) {
    const { name, email } = request.only(['name', 'email'])

    const user = await User.create({
      name,
      email,
    })

    return user
  }
}
