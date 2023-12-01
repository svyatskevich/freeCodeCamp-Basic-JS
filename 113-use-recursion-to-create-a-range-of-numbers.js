function rangeOfNumbers(startNum, endNum) {
   if (startNum === endNum) {
    return [startNum];
  } else {
    let myArray = rangeOfNumbers(startNum + 1, endNum);
    myArray.unshift(startNum);
    return myArray;
 }
};