const express = require('express');

const UserController = require('../Controller/Pelamar');

const router = express.Router();


router.get('/', UserController.getAllDataPelamar);
router.post('/', UserController.createNewPelamar);
router.patch('/:id_pelamar', UserController.editDataPelamar);
router.delete('/:id_pelamar', UserController.deletePelamar);

module.exports = router;