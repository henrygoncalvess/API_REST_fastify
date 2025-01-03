import { UserModel } from "../models/UserModel";

export class UserController {
    static async index(request, reply){
        try{
            const response = await UserModel.findAll()
    
            reply.status(200).send(response)
        }catch (error){
            reply.status(400)
            throw error
        }
    }

    static async new(request, reply){
        try{
            const newUser = await UserModel.create(request.body)
    
            reply.status(201).send(newUser)
        }catch (error){
            reply.status(400)
            throw error
        }
    }

    static async update(request, reply){
        try{
            const userUpdate = await UserModel.update(request.body)
    
            reply.status(200).send(userUpdate)
        }catch (error){
            reply.status(400)
            throw error
        }
    }

    static async remove(request, reply){
        try{
            const userUpdate = await UserModel.delete(request.body)
    
            reply.status(200).send(userUpdate)
        }catch (error){
            reply.status(400)
            throw error
        }
    }
}