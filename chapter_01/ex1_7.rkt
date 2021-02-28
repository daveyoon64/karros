; good-enough? test used in computing square roots will not be very effective for 
; finding the square roots of very small numbers. Also, in real computers, arithmetic 
; operations are almost always performed with limited precision. This makes our test 
; inadequate for very large numbers. Explain these statements, with examples showing 
; how the test fails for small and large numbers. An alternative strategy for 
; implementing good-enough? is to watch how guess changes from one iteration to the 
; next and to stop when the change is a very small fraction of the guess. Design a 
; square-root procedure that uses this kind of end test. Does this work better for 
; small and large numbers?

; good-enough? procedure for reference
(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

; for small numbers like sqrt(0.0001), instead of the answer 0.01, you'll get an incorrect
; answer like 0.03230844....
; for large numbers, it can't handle small differences between large numbers.

;iterates until guess and next guess are equal, 
;automatically produces answer to limit of system precision 
(define (good-enough? guess x) 
  (= (improve guess x) guess)) 