const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const authenticationAPIs = require('./apis/auth/authentication'); 
const urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/login', urlencodedParser, authenticationAPIs.login);
 
module.exports = router;