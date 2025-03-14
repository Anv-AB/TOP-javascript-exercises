const sumAll = function(num1, num2) {
  const isValid =[num1, num2].every(
    (num) => typeof num === "number" && Number.isInteger(num) && num >=0
  );
  if (!isValid) {
    return "ERROR";
  }
  let sum=0;
  for(let i =Math.min(num1, num2); i <= Math.max(num1, num2); i++)
    sum += i;
  return sum;
  };

// Do not edit below this line
module.exports = sumAll;
