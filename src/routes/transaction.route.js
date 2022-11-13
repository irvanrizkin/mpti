const transaction = require('../controllers/transaction.controller');
const router = require('express').Router();

router.post('/create', transaction.createTransaction);
router.get('/:transactionId', transaction.getTransactions);
router.post('/:transactionId/pay', transaction.confirmTransaction);
router.get('/:transactionId/:paymentMethod', transaction.getVa);

module.exports = router;