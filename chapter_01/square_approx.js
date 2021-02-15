function goodEnough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function abs(x) {
  return Math.abs(x);
}

function square(x) {
  return x * x;
}

function average(x, y) {
  return (x + y) / 2;
}

function improve(guess, x) {
  return average(guess, (x/guess));
}

function sqrtIter(guess, x) {
  // return goodEnough(guess, x) 
  //   ? guess 
  //   : sqrtIter(improve(guess, x), x);
  if (goodEnough(guess, x)) {
    // console.log(guess);
    return guess;
  } else {
    return sqrtIter(improve(guess, x), x);
  }
}

function sqrt(x) {
  return sqrtIter(1.0, x);
}

// test to see if console.log can evaluate in args
// console.log(3+4);
// this writes 7 to console
console.log(sqrt(9));
console.log(sqrt(100+ 37));
console.log(sqrt(5) + sqrt(3));
console.log(Math.pow(sqrt(1000), 2));
