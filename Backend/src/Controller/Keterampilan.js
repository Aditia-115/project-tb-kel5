const KeterampilanModels = require('../Models/Keterampilan');

const getAllDataKeterampilan = async (req, res) => {
    try {
        const [data] = await KeterampilanModels.getAllDataKeterampilan();
    
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

const createNewKeterampilan = async (req, res) => {
    const {body} = req;
    if(!body.nama_keterampilan){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await KeterampilanModels.createNewKeterampilan(body);
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

const editDataKeterampilan = async (req, res) => {
    const {kd_keterampilan} = req.params;
    const {body} = req;
    try {
        await KeterampilanModels.editDataKeterampilan(body, kd_keterampilan);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: kd_keterampilan,
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

const deleteKeterampilan = async (req, res) => {
    const {kd_keterampilan} = req.params;
    try {
        await KeterampilanModels.deleteKeterampilan(kd_keterampilan);
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
    getAllDataKeterampilan,
    createNewKeterampilan,
    editDataKeterampilan,
    deleteKeterampilan
};