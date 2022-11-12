const transaction = require('../controllers/transaction.controller');
const router = require('express').Router();

router.post('/create', transaction.createTransaction);
router.get('/:transactionId', transaction.getTransactions);


module.exports = router;