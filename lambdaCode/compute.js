exports.compute = () => {
  let x;
  let denominator = 1;
  let pi = 0;
  for(x =0;x<1000;x++) {
    if(x % 2 == 0) {
      pi += 1/denominator;
    } else {
      pi -= 1/denominator;
    }
    denominator += 2;
  }
  return pi * 4;
}
//
