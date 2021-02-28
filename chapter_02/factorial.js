// This is how I learned it
function factorial(n) {
  return n === 1
         ? 1
         : n * factorial(n - 1);
}

// as noted, this process has several features
// 1. Expansion builds up a chain of deferred operations (recursive process)
// 2. Interpreter has to keep track of operations to be performed later on
// 3. It grows linearly with n and is called linear recursive process

// Example
// factorial(6)
// 6 * factorial(5)
// 6 * (5 * (factorial(4)))
// 6 * (5 * (4 * factorial(3)))
// 6 * (5 * (4 * (3 * factorial(3))))
// 6 * (5 * (4 * (3 * (2 * factorial(2)))))
// 6 * (5 * (4 * (3 * (2 * (2 * factorial(1))))))
// 6 * (5 * (4 * (3 * (2 * (2 * 1))))) <----- substitution done, onto the solving

// another way
function factorial_new(n) {
  return fact_iter(1, 1, n);
}

function fact_iter(product, counter, max_count) {
  return counter > max_count
          ? product
          : fact_iter(counter * product,
                      counter + 1,
                      max_count);
}
// the linear iterative process
// and looks like this...
// factorial_new(6)
// fact_iter(1, 1, 6)
// fact_iter(1, 2, 6)
// fact_iter(2, 3, 6)
// fact_iter(6, 4, 6)
// fact_iter(24, 5, 6)
// fact_iter(120, 6, 6)
// fact_iter(720, 7, 6)
// 720

// remember that a recursive process is NOT THE SAME at a recursive function
// executing an iterative process in constant space (even when described by a recursive function)
// this is known as tail-recursive