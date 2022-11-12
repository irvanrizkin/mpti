const transaction = require('../controllers/transaction.controller');
const router = require('express').Router();

router.post('/create', jwtMiddleware, transaction.createTransaction);


module.exports = router;