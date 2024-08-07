module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i=0; i < str.length; i++) {
    bracketsConfig.forEach((brackets) => {
         brackets.forEach((item, itemindex) => {
             let l = arr.length-1
             if (item === str[i]) {
                if (brackets[0] === brackets[1]) {
                  if (itemindex === 0) {
                    arr[l] !== str[i] ? arr.push(str[i]) : arr.pop();
                  }
                } else if (brackets[0] !== brackets[1]) {
                    if (itemindex === 0) {
                       arr.push(str[i]);
                    } else if (itemindex === 1) {
                          arr[l] === brackets[0] ? arr.pop() : arr.push(str[i]);
                        }
                }
              }
             }
      )
  })}
  return (!arr.length) ? true :  false
}
