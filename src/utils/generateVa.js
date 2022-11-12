const {nanoidNumber, nanoidAlpha} = require('../config/nanoid.config');

const vaHandler = () => {
    const bca = '33365' + nanoidNumber(6);
    const bni = '98833365' + nanoidNumber(8);
    const bri = '71565' + nanoidNumber(15);
    const mandiri = '40125' + nanoidNumber(8);
    const alfamart = nanoidAlpha(4) + nanoidNumber(6) + nanoidAlpha(4);
    const indomart = nanoidAlpha(6) + nanoidNumber(4) + nanoidAlpha(2);
    const brilink = 'BRI' + nanoidAlpha(4) + nanoidNumber(4);

    return {
        bca,
        bni,
        bri,
        mandiri,
        alfamart,
        indomart,
        brilink
    };
}

module.exports = vaHandler;