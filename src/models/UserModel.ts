import db from '../config/db';

export class UserModel {
    static findAll(): Array<Object>{
        return db
    }

    static create(name: string, age: number): {name: string, age: number}{
        const newUser = {
            name: name,
            age: age
        }

        db.push(newUser)

        return newUser
    }
}