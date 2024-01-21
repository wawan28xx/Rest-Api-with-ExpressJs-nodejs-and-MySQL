const UserModel = require('../models/users');

const getAllUsers = async (req, res) => {

    try {
        const [data] = await UserModel.getAllUsers();
        
        res.json({
            message: 'GET All users success',
            data: data
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUsers = async(req, res) => {
    // console.log(req.body); //CREATE dumy CRUD
    const {body} = req;

    if(!body.email || !body.name || !body.address){
        return res.status(400).json({
            message: 'Anda Mengirimkan Data yang Salah',
            data: null,
        })
    }

    try {
        await UserModel.createNewUsers(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
        
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUser(body, idUser)
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUser = async(req, res) => {
    const {idUser} = req.params;
    try {
        await UserModel.deleteUser(idUser);    
        res.json({
            message: 'DELETE user success',
            data: null        
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
}