const {nanoidNumber, nanoidAlpha} = require('../config/nanoid.config');

const vaHandler = () => {
    const bcaVa = '33365' + nanoidNumber(6);
    const bniVa = '98833365' + nanoidNumber(8);
    const briVa = '71565' + nanoidNumber(15);
    const mandiriVa = '40125' + nanoidNumber(8);
    const alfamartCode = nanoidAlpha(4) + nanoidNumber(6) + nanoidAlpha(4);
    const indomartCode = nanoidAlpha(6) + nanoidNumber(4) + nanoidAlpha(2);
    const brilinkCode = 'BRI' + nanoidAlpha(4) + nanoidNumber(4);

    return {
        bcaVa,
        bniVa,
        briVa,
        mandiriVa,
        alfamartCode,
        indomartCode,
        brilinkCode
    };
}

module.exports = vaHandler;