const express = require('express');

const UserController = require('../Controller/Jenis_Kelamin');

const router = express.Router();


router.get('/', UserController.getAllDataJenisKelamin);

module.exports = router;