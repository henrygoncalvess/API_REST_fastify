import db from '../config/db';
import { User } from '../types/usermodel';

export class UserModel {
    static findAll(): Array<Object>{
        return db
    }

    static create({ name, age }: User): User{
        const newUser: User = { name, age }

        db.push(newUser)

        return newUser
    }

    static update({ currentUsername, newUsername }: { currentUsername: string, newUsername: string }){
        const userExist = db.findIndex(value => {
            return value.name === currentUsername
        })

        if (userExist != -1){
            db[userExist].name = newUsername

            return { currentUsername, newUsername }
        }else{
            return "user not found"
        }
    }

    static delete({ name }: { name: string }){
        const userExist = db.findIndex(value => {
            return value.name === name
        })

        if (userExist != -1){
            db.splice(userExist, 1)

            return "user successfully deleted"
        }else{
            return "user not found"
        }
    }
}