console.log('a')

const arr = [-1, 1, 2, 3];

const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)



// let sum = 0;

// for (let elem of arr) {
//   sum += elem;
// }

console.log(sum);

