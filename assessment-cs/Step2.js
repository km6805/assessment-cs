const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
      for (let a = 0; a < arr.length; a++) {
          if (arr[i] + arr[a] === 0) {
              return true
          }
      }
  }
  return false
}
console.log(addToZero([-5, 2, 1, 5]));


const hasUniqueChars = (string) => {
  for (let i = 0; i < string.length; i++) {
      for (let c = 0; c < string.length; c++) {
          if (string.char(i) === string.char(c)) {
              return false
          }
      }
  }
  return true
}
console.log(hasUniqueChars(''))


function isPangram(string) {
  let stringArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < alphabet.length; i++) {
      if (stringArr.indexOf(alphabet[i]) < 0) {
          return false;
      }
  }
  return true;
}
console.log(isPangram("A quick brown fox jumps over the lazy dog"))


function findLongestWord(arr) {
 let longestWord = arr.sort(function(x, y){ return y.length - x.length})
 return longestWord[0].length
}
console.log(findLongestWord(["You", "did it"]));