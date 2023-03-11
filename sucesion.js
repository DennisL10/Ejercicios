
// Fibonacci sucesion
//Dado un número "n" desde la funcion, devolver un array con los n primeros números de la sucesión de Fibonacci.
// const sucesion = [0, 1];
// for (let i = 2; i < 10; i++) {
//     sucesion[i] = sucesion[i - 2] + sucesion[i - 1];
// }
// console.log(sucesion);


// Ddado un número n, devolver un array con los n primeros números de la sucesión de Fibonacci.
/* const sucesion2 = (n) => {   
    const sus = [0, 1];
    for (let i = 2; i < n; i++) {
        sus[i] = sus[i - 2] + sus[i - 1];
    }
    return sus;
}
console.log(sucesion2(10)); */

//Forma recursiva de la sucesión de Fibonacci   
/* function fibonacci(n) {
  let fib = [];
  
  if (n === 1) {
    fib.push(0);
  } else if (n === 2) {
    fib.push(0, 1);
  } else {
    fib.push(0, 1);
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  
  return fib;
}

console.log(fibonacci(10));



const Factiorial = (n) => {
    let fact = 1;
     for (let i = 1; i <= n; i++) {
         fact = fact * i;
    }
     return fact;
 }
 console.log(Factiorial(5));

const Factorial2 = (n) => {
    if (n == 0) {
        return 1;
    }
   return n * Factorial2(n - 1);
 }
 console.log(Factorial2(5)); */
