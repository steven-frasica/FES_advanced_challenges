/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
  let reversedInt = parseInt(int.toString().split('').reverse().join(''))

  console.log(reversedInt, 'reversedInt')
  if (int < 0) {
    reversedInt = reversedInt * -1
  }
  return reversedInt
};

module.exports = reverseInteger;
