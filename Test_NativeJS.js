// const arr = (numbers) => {
//  let result=0;
//   for (i=0; i<numbers.length; i++) {
//    if (numbers[i]>result){
//     result = numbers[i]
//    }
//   }
//  return result;
// };
// console.log(arr([4, 2, 9, 10, 22, 1, 3]))


// const arr = (numbers) => {
//     let result = [];
//     let currentNumber = numbers[0];
//     for (i = 0; i < numbers.length; i++) {
//         if (currentNumber < numbers[i]) {
//             currentNumber = numbers[i]
//         }
//     }
//     result.push(currentNumber)
//     return result;
// };
//
// console.log(arr([4, 2, 9, 10, 22, 1, 3]))


function BubbleSort(A) {
    let n = A.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (A[j + 1] < A[j]) {
                let t = A[j + 1];
                A[j + 1] = A[j];
                A[j] = t;
            }
        }
    }
    let result = A.slice(-3)
    return result.reverse()
}

console.log(BubbleSort([4, 2, 9, 10, 22, 1, 3]))