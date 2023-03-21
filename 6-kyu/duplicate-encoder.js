// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
  let countArr = word.toLowerCase().split('').reduce((count, char) => {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
    return count;
  }, {})
  
  return word.toLowerCase().split('').map(char => countArr[char] > 1 ? ')' : '(').join('');   
}