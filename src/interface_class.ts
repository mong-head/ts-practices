// Shape 라는 interface
interface Shape {
    // getArea함수가 반드시 있어야 하고, number 반환
    getArea(): number;
}

// 같은 이름으로 선언가능 - 확장성 있음
interface Shape {
    something? : number;
}


// implements : Shape interface 조건 충족할 것
class Circle implements Shape {
    radius : number;

    constructor(radius: number){
        this.radius = radius;
    }

    // getArea 구현
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    // this 변수는 반드시 constructor내에서 초기화 되어야 함
    width: number;
    height: number;

    constructor(width: number, height:number){
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})