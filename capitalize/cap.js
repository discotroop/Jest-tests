function capitalized(string) {
    let result = string
    result[0] = string[0].toUpperCase();
    return result;
  }
  module.exports = capitalized;