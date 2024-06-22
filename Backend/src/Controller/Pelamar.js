const PelamarModels = require('../Models/Pelamar');

const getAllDataPelamar = async (req, res) => {
    try {
        const [data] = await PelamarModels.getAllDataPelamar();
    
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

const createNewPelamar = async (req, res) => {
    const {body} = req;
    if(!body.nama_pelamar || !body.jenis_kelamin_pelamar || !body.alamat_pelamar || !body.email_pelamar || !body.no_telpon_pelamar || !body.kd_pendidikan || !body.pengalaman_pelamar || !body.tanggal_lamar){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await PelamarModels.createNewPelamar(body);
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

const editDataPelamar = async (req, res) => {
    const {id_pelamar} = req.params;
    const {body} = req;
    try {
        await PelamarModels.editDataPelamar(body, id_pelamar);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: id_pelamar,
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

const deletePelamar = async (req, res) => {
    const {id_pelamar} = req.params;
    try {
        await PelamarModels.deletePelamar(id_pelamar);
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
    getAllDataPelamar,
    createNewPelamar,
    editDataPelamar,
    deletePelamar
};