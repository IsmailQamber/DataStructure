// const numbers = [
//     [1, 2, 3, 4],
//     [3, 6, [5, 6], 8, 2,[2, 4], 9],
//     [4, 2, [6, 7, [2, 6, 1]]]
// ]
// const n = numbers.length;
// // console.table(numbers)

// const FindSum = (numbers, length) => {
//     while(length < 0){
//         numbers.forEach((number) => {
//               FindSum(number, length) 
//             length--;
//         });
//     }
// }
// FindSum(numbers, n);


const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]

const findSum = (array) => {
    let sum = 0;
    for (let element of array){
        if(typeof element === "number"){// To check if the index contains a number or not 
            sum += element;
        } else {
            sum += findSum(element);
        }
    }
    return sum;
}

 console.log(findSum(numbers));