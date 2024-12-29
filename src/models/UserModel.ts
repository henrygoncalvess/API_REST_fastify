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
        const userUpdate = db.findIndex(value => {
            return value.name === currentUsername
        })

        if (userUpdate != -1){
            db[userUpdate].name = newUsername

            return { currentUsername, newUsername }
        }

        throw new Error(`user ${currentUsername} not found`)
    }
}