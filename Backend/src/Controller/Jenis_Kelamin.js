const JenisKelaminModels = require('../Models/Jenis_Kelamin');

const getAllDataJenisKelamin = async (req, res) => {
    try {
        const [data] = await JenisKelaminModels.getAllDataJenisKelamin();
    
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

module.exports = {
    getAllDataJenisKelamin,
};