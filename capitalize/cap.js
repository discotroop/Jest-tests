function capitalized(string) {
    let result = string.split("");
    result[0] = result[0].toUpperCase();
    return result.join("");
  }
  module.exports = capitalized;