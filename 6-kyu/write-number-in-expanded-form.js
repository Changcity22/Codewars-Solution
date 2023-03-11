// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


function expandedForm(num) {
  
  let array = num.toString().split('');
  let expanded = [];
  
  for (let i = 0; i <= array.length - 1 ; i++) {
   
    if (array[i] != 0) {
      expanded[i] = array[i];
    
      for (let j = array.length - 1 - i; j > 0; j--) {
        expanded[i] += '0';
      }
    }
  }
  
  return expanded.filter(num => num).join(' + ')
}