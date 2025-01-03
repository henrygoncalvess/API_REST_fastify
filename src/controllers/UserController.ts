import { UserModel } from "../models/UserModel";

export class UserController {
    static async index(request, reply): Promise<void>{
        try{
            const response = await UserModel.findAll()
    
            reply.status(200).send(response)
        }catch (error){
            reply.status(400)
            throw error
        }
    }

    static async new(request, reply): Promise<void>{
        try{
            const newUser = await UserModel.create(request.body)
    
            reply.status(201).send(newUser)
        }catch (error){
            reply.status(400)
            throw error
        }
    }

    static async update(request, reply): Promise<void>{
        try{
            const userUpdate = await UserModel.update(request.body)
    
            reply.status(200).send(userUpdate)
        }catch (error){
            reply.status(400)
            throw error
        }
    }
}