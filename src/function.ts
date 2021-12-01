/* 함수 */
function sum(x: number, y: number): number {
    return x+y;
}
console.log(sum(1,2)); // 3

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc,current) => acc + current, 0);
}
console.log(sumArray([1,2,3])) // 6

function returnNothing(): void{
    console.log('return nothing')
 }
 returnNothing()