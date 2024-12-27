import { UserModel } from "../models/UserModel";

export class UserController {
    static async index(request: any, reply: any): Promise<void>{
        try{
            const response = await UserModel.findAll()
    
            reply.status(200).send(response)
        }catch (error){
            throw error
        }
    }

    static async new(request: any, reply: any): Promise<void>{
        try{
            const newUser = await UserModel.create(request.body)
    
            reply.status(201).send(newUser)
        }catch (error){
            throw error
        }
    }
}