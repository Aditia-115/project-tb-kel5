const DetailKeterampilanModels = require('../Models/Detail_Keterampilan');

const getAllDataDetailKeterampilan = async (req, res) => {
    try {
        const [data] = await DetailKeterampilanModels.getAllDataDetailKeterampilan();
    
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

const createNewDetailKeterampilan = async (req, res) => {
    const {body} = req;
    if(!body.kd_keterampilan || !body.id_pelamar){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await DetailKeterampilanModels.createNewDetailKeterampilan(body);
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

const deleteDetailKeterampilan = async (req, res) => {
    const {id_detail_keterampilan} = req.params;
    try {
        await DetailKeterampilanModels.deleteDetailKeterampilan(id_detail_keterampilan);
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
    getAllDataDetailKeterampilan,
    createNewDetailKeterampilan,
    deleteDetailKeterampilan
};