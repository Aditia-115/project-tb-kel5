const express = require('express');

const UserController = require('../Controller/Detail_Keterampilan');

const router = express.Router();


router.get('/', UserController.getAllDataDetailKeterampilan);
router.post('/', UserController.createNewDetailKeterampilan);
router.delete('/:id_detail_keterampilan', UserController.deleteDetailKeterampilan);

module.exports = router;