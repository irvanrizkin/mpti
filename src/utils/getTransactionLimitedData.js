const getLimitedData = (data) => {
    const {transactionId, vendorName, customerName, total, status, createdAt, updatedAt} = data;
    return {
        transactionId,
        vendorName,
        customerName,
        total,
        status,
        createdAt,
        updatedAt
    }
}

module.exports = getLimitedData;