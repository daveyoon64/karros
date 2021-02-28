; What happens when Alyssa attempts to use this to compute square roots? Explain.
; the new if
(define (new-if predicate then-clause else-clause) 
  (cond (predicate then-clause)
        (else else-clause)))

(define (sqrt-iter guess x) 
  (new-if (good-enough? guess x)
          guess
          (sqrt-iter (improve guess x) x)))

; versus the old version
(define (old-sqrt-iter guess x) 
  (if (good-enough? guess x)
      guess
      (old-sqrt-iter (improve guess x) x)))

; good-enough? procedure for reference
(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

; Answer
; By not using the special form if, the new sqrt-iter procedure will use the 
; applicative-order method of evaluation. In other words, it will try to 
; evaluate the operands before doing anything else, therefore getting stuck 
; in an infinite loop of (sqrt-iter (improve guess x) x)))
