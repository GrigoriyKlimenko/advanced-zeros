module.exports = function getZerosCount(number, base) {
  // your implementation
  let a;
  let b;
  let c;
  let zeroArray = [];
  let zerosCount;
  for (a = 2; a <= base; a++) {
    b = 0;
    c = 0;
    let number2 = number;
    if (base % a == 0) {
      while (base % a == 0) {
        base = base / a;
        b++;
      }
      while (Math.floor(number2 / a) >= 1) {
        number2 = Math.floor(number2 / a);
        c = c + number2;
      }
      zeroArray.push(Math.floor(c / b));
    }
  }
  zerosCount = zeroArray[0];
  for (i = 1; i < zeroArray.length; i++) {
    if (zeroArray[i] < zerosCount) {
      zerosCount = zeroArray[i];
    }
  }
  return zerosCount;
}