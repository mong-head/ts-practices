type Person2 = {
    name : string;
    age? : number;
}

// 바로 밑 코드 : error (두 번 선언 불가능)
// type Person2 = {
//     something? : number;
// }

// & : intersection - 2개 이상의 type 합침
type Developer2 = Person2 & {
    skills: string[];
}

const person2: Person = {
    name: '김사랑'
}

const expert2: Developer2 = {
    name: '김개발',
    skills: ['javascript','react']
}

type People2 = Person[]; //People2를 Person[]이라는 type으로 사용가능
const people2: People2 = [person2, expert2];

type Color = 'red' | 'orange' | 'yellow';
const color2: Color = 'red';
const colors2: Color[] = ['red','orange'];