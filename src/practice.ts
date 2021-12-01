// const message: string = 1; // error
const message: string = 'hello world';

let count = 0;
count += 1;
//count = '문자열'; //error

const done: boolean = true;
const numbers: number[] = [1,2,3];
const messages: string[] = ['hello','world'];

//messages.push(1); //error : string 배열임

let mightBeUndefined: string | undefined = undefined; //string or undefied
let nullableNumber: number | null = null; //number or null

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
//color = 'green'; //error