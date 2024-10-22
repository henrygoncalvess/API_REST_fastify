const UserModel = require('../models/UserModel.js')

class UserController{
    index(req, res){
        const response = UserModel.findAll()

        res.json(response)
    }

    new(req, res){
        UserModel.create(req.body)

        res.sendStatus(201)
    }

    update(req, res){
        UserModel.update(req.body)

        res.sendStatus(200)
    }

    remove(req, res){
        UserModel.delete(req.body)

        res.sendStatus(200)
    }
}

module.exports = new UserController