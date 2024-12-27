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
}