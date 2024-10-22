const database = require("../config/db");

class UserModel{
    static findAll(){
        const response = database

        return response
    }

    static create(newUser){
        database.push(newUser)

        console.log(`new user: "${newUser.username}"`);
    }

    static update({currentUser, newUsername}){
        database.forEach((element, pos) => {
            if (element.username === currentUser){
                console.log(`before: ${element.username}`);
                element.username = newUsername
                console.log(`after: ${element.username}`);
            }else if (pos == database.length - 1){
                console.log(`user "${currentUser}" not found`);
            }
        })
    }

    static delete({deleteUser}){
        database.forEach((element, pos) => {
            if (element.username === deleteUser){
                database.splice(pos, 1)
            }
        })

        console.log(`deleted user: ${deleteUser}`);
    }
}

module.exports = UserModel