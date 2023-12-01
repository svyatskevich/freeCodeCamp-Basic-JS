function randomRange(myMin, myMax) {
  let random = Math.random() * (myMax - myMin + 1) +  myMin;
  let randomRange = Math.floor(random);
 
  if (randomRange >= myMin && randomRange <= myMax){
    return randomRange;
  }
}