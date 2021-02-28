function plus(a, b) {
  return a === 0 ? b : inc(plus(dec(a), b))
}

// plus(4, 5)
// it'll look like this!
// plus(inc(inc(inc(inc(inc 0, 5)))))
// plus(inc(inc(inc(inc(5)))))
// plus(inc(inc(inc(6))))
// plus(inc(inc(7)))
// plus(inc(8))
// plus(9)
// this process is recursive

function plus(a, b) {
  return a === 0 ? b : plus(dec(a), inc(b));
}
// plus(4, 5)
// 4 === 0 ? 5 : plus(dec(4), inc(5))
// plus(3, 6)
// 3 === 0 ? 6 : plus(dec(3), inc(6))
// plus(2, 7)
// 2 === 0 ? 7 : plus(dec(2), inc(7))
// plus(1, 8)
// 1 === 0 ? 8 : plus(dec(1), inc(8))
// plus(0, 9)
// 0 === 0 True
// 9
// this proces is iterative