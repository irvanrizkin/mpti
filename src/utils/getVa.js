const getVaHandler = (transactionData,paymentMethod) => {
    const {
        bcaVa,
        bniVa,
        briVa,
        mandiriVa,
        alfamartCode,
        indomartCode,
        brilinkCode
    } = transactionData;

    switch (transactionData,paymentMethod) {
        case 'bca':
            return bcaVa;
        case 'bri':
            return briVa;
        case 'bni':
            return bniVa;
        case 'mandiri':
            return mandiriVa;
        case 'alfamart':
            return alfamartCode;
        case 'indomart':
            return indomartCode;
        case 'brilink':
            return brilinkCode;
        default:
            return { error: "payment method not listed"}            
    }
}

module.exports = getVaHandler;