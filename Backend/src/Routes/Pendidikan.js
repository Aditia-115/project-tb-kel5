const express = require('express');

const UserController = require('../Controller/Pendidikan');

const router = express.Router();


router.get('/', UserController.getAllDataPendidikan);
router.post('/', UserController.createNewPendidikan);
router.patch('/:kd_pendidikan', UserController.editDataPendidikan);
router.delete('/:kd_pendidikan', UserController.deletePendidikan);

module.exports = router;