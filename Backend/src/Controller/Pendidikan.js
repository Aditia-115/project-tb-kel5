const PendidikanModels = require('../Models/Pendidikan');

const getAllDataPendidikan = async (req, res) => {
    try {
        const [data] = await PendidikanModels.getAllDataPendidikan();
    
        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewPendidikan = async (req, res) => {
    const {body} = req;
    if(!body.nama_pendidikan){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await PendidikanModels.createNewPendidikan(body);
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

const editDataPendidikan = async (req, res) => {
    const {kd_pendidikan} = req.params;
    const {body} = req;
    try {
        await PendidikanModels.editDataPendidikan(body, kd_pendidikan);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: kd_pendidikan,
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

const deletePendidikan = async (req, res) => {
    const {kd_pendidikan} = req.params;
    try {
        await PendidikanModels.deletePendidikan(kd_pendidikan);
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
    getAllDataPendidikan,
    createNewPendidikan,
    editDataPendidikan,
    deletePendidikan
};