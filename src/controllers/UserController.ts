import { UserModel } from "../models/UserModel";

export class UserController {
    static async index(request: any, reply: any): Promise<void>{
        const response = await UserModel.findAll()

        reply.status(200).send(response)
    }

    static async new(request: any, reply: any): Promise<void>{
        const { name, age } = request.body

        const newUser = UserModel.create(name, age)

        reply.status(201).send(newUser)
    }
}