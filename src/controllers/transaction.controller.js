const db = require('../models');
const Transaction = db.transaction;
const vaHandler = require('../utils/generateVa');
const { nanoid } = require('../config/nanoid.config');
const getLimitedData = require('../utils/getTransactionLimitedData');
const getVaHandler = require('../utils/getVa');
const { default: axios } = require('axios');

const createTransaction = async (req, res, next) => {
  const transactionId = `TRC-${nanoid(16)}`;  
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

    const transactionData = getLimitedData(transaction);

    return res.status(200).json({
      success: true,
      message: 'new transaction created',
      results: {
        ...transactionData
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

    const transactionData = getLimitedData(transaction);

    return res.status(200).json({
      success: true,
      message: 'Success get transaction',
      results: {
        ...transactionData,
      },
    })
  } catch (error) {
    next(error);
  }
}

const getVa = async (req, res, next) => {
  const { transactionId, paymentMethod } = req.params;
  try {    

    const transaction = await Transaction.findOne({
      where:{
        transactionId
      }
    })

    if(!transaction) return next('404,Transaction not found');

    const va = getVaHandler(transaction,paymentMethod);
    const transactionData = getLimitedData(transaction);

    return res.status(200).json({
      success: true,
      message: 'Success get va number',
      results: {
        ...transactionData,
        virtualAccount: va        
      },
    })
  } catch (error) {
    next(error);
  }
}

const confirmTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  try {    
    const status = true;

    const transaction = await Transaction.findOne({
      where:{
        transactionId
      }
    })

    if(!transaction) return next('404,Transaction not found');

    const updateTransaction = await Transaction.update({
      status
    },{
      where:{
        transactionId
      }
    })

    const transactionData = getLimitedData(transaction);

    return res.status(200).json({
      success: true,
      message: 'Success pay transaction',
      results: {
        ...transactionData,
        status
      },
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTransactions,
  createTransaction,  
  confirmTransaction,
  getVa
}