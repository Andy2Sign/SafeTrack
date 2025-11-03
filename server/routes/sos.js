const express = require('express');
const router = express.Router();
const { handleSOS } = require('../controllers/sosController');
const verifyToken = require('../intermediary/verifyToken');

router.post('/', verifyToken, handleSOS);

module.exports = router;
