module.exports = function check(str, bracketsConfig) {
  const configure = {};
  const arr = [];

  bracketsConfig.forEach(config => {
    configure[config[0]] = config[1];
  });

  for (let i = 0; i < str.length; i++) {
     
    if (configure[arr[arr.length - 1]] === str[i]) {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }
  return arr.length === 0;

}
