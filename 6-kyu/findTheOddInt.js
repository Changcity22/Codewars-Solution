// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.




function findOdd(A) {
  
  let countObject = A.reduce((a, num) => {
    if (!a[num]) {
      a[num] = 0;
    }
    
    a[num]++;
    return a;
  }, {})
  
  let keys = Object.keys(countObject);
  
  for (let i = 0; i < keys.length; i++) {
    if (countObject[keys[i]] % 2 != 0) {
      return +keys[i];
    }
  }
 
}