const db = require('../models');
const Transaction = db.transaction;
const vaHandler = require('../utils/generateVa');
const { nanoid } = require('../config/nanoid.config');

const createTransaction = async (req, res, next) => {
  const transactionId = `TRC-${nanoid()}`;  
  const { vendorName, customerName, total, notificationUrl='' } = req.body;    
  
  try {
    const payCodes = vaHandler();
    
    const transaction = await Transaction.create({      
      transactionId,
      vendorName,
      customerName,      
      total,
      notificationUrl,
      ...payCodes,
      status: false,         
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });    

    return res.status(200).json({
      success: true,
      message: 'new transaction created',
      results: {
        transaction
      },
    })
  } catch (error) {
    next(error);
  }
}

const getTransactions = async (req, res, next) => {
  const { transactionId } = req.params;
  try {    

    const transaction = await Transaction.findOne({
      where:{
        transactionId
      }
    })

    if(!transaction) return next('404,Transaction not found');

    const {vendorName, customerName, total, createdAt, updatedAt} = transaction;

    return res.status(200).json({
      success: true,
      message: 'Success get transaction',
      results: {
        createdAt,
        updatedAt,
        transactionId,
        vendorName,
        customerName,
        total,
      },
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTransactions,
  createTransaction,  
  // confirmTransaction,
}