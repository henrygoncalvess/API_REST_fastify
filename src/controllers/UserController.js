const UserModel = require('../models/UserModel.js')

class UserController{
    index(req, res){
        const response = UserModel.findAll()

        res.status(200).json(response)
    }

    new(req, res){
        UserModel.create(req.body)

        res.status(201)
    }

    update(req, res){
        UserModel.update(req.body)

        res.status(200)
    }

    remove(req, res){
        UserModel.delete(req.body)

        res.status(200)
    }
}

module.exports = new UserController