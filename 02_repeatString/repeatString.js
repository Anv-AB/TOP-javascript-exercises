// const repeatString = function(string, num) {
//   let repeatedString = "";
//   let i = num;
//   if (i < 0) {
//       repeatedString = "ERROR";
//   } else {
//     while (i > 0) {
//       repeatedString += `${string}`;
//       i--
//     }
//   }
//   return repeatedString;
// };

// const repeatString = function(string, num) {
//   if (num < 0) return "ERROR";
//   let repeatedString = "";
//   for (let i = 0; i < num; i++) {
//     repeatedString += `${string}`;
//   }
//   return repeatedString;
// }

const repeatString = function(string, num) {
  if (num < 0) return "ERROR";
  let repeatedString = "";
  for (let i = num; i > 0; i--) {
    repeatedString += `${string}`;
  }
  return repeatedString;
}



// Do not edit below this line
module.exports = repeatString;
