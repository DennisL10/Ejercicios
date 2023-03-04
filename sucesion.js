
// // Fibonacci sucesion
//Dado un número "n" desde la funcion, devolver un array con los n primeros números de la sucesión de Fibonacci.
// const sucesion = [0, 1];
// for (let i = 2; i < 10; i++) {
//     sucesion[i] = sucesion[i - 2] + sucesion[i - 1];
// }
// console.log(sucesion);


// // Ddado un número n, devolver un array con los n primeros números de la sucesión de Fibonacci.
// const sucesion2 = (n) => {   
//     const sus = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sus[i] = sus[i - 2] + sus[i - 1];
//     }
//     return sus;
// }
// console.log(sucesion2(10));

//Forma recursiva de la sucesión de Fibonacci   
// function sucesion(n) {
//     let sequence = [];
//     if (n === 0) {
//       return sequence;
//     } else if (n === 1) {
//       sequence.push(0);
//       return sequence;
//     } else {
//       let first = 0, second = 1, next;
//       sequence.push(first, second);
//       for (let i = 2; i < n; i++) {
//         next = first + second;
//         sequence.push(next);
//         first = second;
//         second = next;
//       }
//       return sequence;
//     }
//   }
//     console.log(sucesion(10));



// const Factiorial = (n) => {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(Factiorial(5));

// const Factorial2 = (n) => {
//     if (n == 0) {
//         return 1;
//     }
//     return n * Factorial2(n - 1);
// }
// console.log(Factorial2(5));
