// const reverseString = function(string) {
//   let original = string.split("");
//   let reversedArray = [];
//   for (let i = 0; i < original.length; i++) {
//     reversedArray[i] = original[(original.length-1)-i];

//   }
//   let reversed = reversedArray.join("");
//   return reversed;
// };

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
