const express = require('express');

const UserController = require('../Controller/Keterampilan');

const router = express.Router();


router.get('/', UserController.getAllDataKeterampilan);
router.post('/', UserController.createNewKeterampilan);
router.patch('/:kd_keterampilan', UserController.editDataKeterampilan);
router.delete('/:kd_keterampilan', UserController.deleteKeterampilan);

module.exports = router;