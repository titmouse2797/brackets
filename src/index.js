module.exports = function check(str, bracketsConfig) {
  let myStr = str.split('');

  for (let i = 0; i < bracketsConfig.length; i++) {
    let arr = bracketsConfig[i];
    
    for (let j = 0; j < myStr.length; j++) {
      if (myStr[j] == arr[0] && myStr[j+1] == arr[1]) {
        myStr.splice(j,2);
        j -= 2;
        i = -1;
        if(!myStr.length) {
          return true;
        };
      };
    };
  };

  return false;
}
