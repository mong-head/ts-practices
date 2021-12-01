"use strict";
/* 함수 */
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2)); // 3
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sumArray([1, 2, 3])); // 6
function returnNothing() {
    console.log('return nothing');
}
returnNothing();
