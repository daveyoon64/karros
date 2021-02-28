; Newton’s method for cube roots is based on the fact that if y is an approximation to 
; the cube root of x , then a better approximation is given by the value:
; ((x/y)^2 + 2y) / 3
; Use this formula to implement a cube-root procedure analogous to the square-root procedure.
(define (good-enough? guess x)
    (< (/ (+ (/ x (square guess)) 
             (* 2 guess)) 
          (3)) 
       (0.001)))

(define (good-enough? guess x)
    (< (/ (+ (/ x (square guess)) (* 2 guess)) (3)) 
       (0.001)
    )
)

(define (cube-root guess x)
    (if (good-enough? guess x)
        guess
        (cube-root (improve guess x) x)))

 (define (improve guess x) 
    (average guess (/ x guess)))

(define (average x y) 
    (/ (+ x y) 2))

(define (square x) 
    (* x x))