const database = require('../models/connection.js')

class UserController{
    index(req, res){
        const [ response ] = database

        res.json(response)
    }

    new(req, res){
        database[0].push(req.body)

        console.log(database[0]);

        res.sendStatus(201)
    }

    update(req, res){
        const { cliente, total } = req.body

        database[0].forEach(element => {
            if (element.cliente === cliente){
                element.total = total
            }
        })

        res.sendStatus(200)
    }

    remove(req, res){
        const { cliente } = req.body

        console.log(database[0]);

        database[0].forEach((element, pos) => {
            if (element.cliente === cliente){
                database[0].splice(pos, 1)
            }
        })

        console.log(database[0]);

        res.sendStatus(200)
    }
}

module.exports = new UserController