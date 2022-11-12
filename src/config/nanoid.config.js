const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  16
);
const nanoidNumber = (size) => {
  return customAlphabet(
    "0123456789",
    size
  );
}

const nanoidAlpha = (size) => {
  return customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    size
  );
}

module.exports = {
  nanoid, 
  nanoidNumber,
  nanoidAlpha
};