const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]
const n = numbers.length;
// console.table(numbers)

const FindSum = (numbers, length) => {
    while(length < 0){
        numbers.forEach((number) => {
              FindSum(numbers, length) 
            length--;
        });
    }
}
FindSum(numbers, n);