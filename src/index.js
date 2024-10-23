let BRACKETS = new Map();

function createBracket(bracketsConfig){
  for (let i = 0; i < bracketsConfig.length; i++){
    BRACKETS.set(bracketsConfig[i][0], bracketsConfig[i][1]);
  }
}

module.exports = function check(str, bracketsConfig) {
  createBracket(bracketsConfig);
  let stack = [];
  for (let i = 0; i < str.length; i++){
    if (stack.length > 0 && str[i] === BRACKETS.get(str[i]) && str[i] === stack.at(-1)){
      stack.splice(stack.length - 1, 1);
    }

    else if (BRACKETS.has(str[i])){
      stack.push(str[i]);
    }

    else{
      if (str[i] === BRACKETS.get(stack[stack.length - 1])){
          stack.splice(stack.length - 1, 1);
      }
      else
          return false;
    }
    
    if (stack.length === 0 && i === str.length - 1){
        return true;
    }
  }

  if (stack.length != 0)
    return false;
}