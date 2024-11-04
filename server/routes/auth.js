const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {login , signup} = require('../controllers/auth.js')

router.post('/signup', signup)
router.post('/login', login)

module.exports = router;