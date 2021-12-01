# typescript practice

## 설정 & 실행
### 설정
```powershell
# init(package.json)
npm init -y

# typescript 설치
npm install -g typescript

# ts설정 -> tsconfig.json 생성됨
tsc --init
```
* tsconfig.json 추가 설정
    ```json
    {
        ...
        "outDir": "./dist",
        ...
    }
    ```
    * outDir : ```tsc``` 후 설정한 폴더 밑에 js 생김

### 실행
```powershell
# typescript compile - tsconfig.json 정보대로
tsc

# 실행
node ./dist/dataType.js
```

## 문법

### 1. [기본 타입](./src/dataType.ts)

* ```변수명 : 변수 타입(or 지정된 값)```
    * 변수 타입 : number, string, ...
    * ex
        ```ts
        const done: boolean = true;
        const numbers: number[] = [1,2,3];      
        const messages: string[] = ['hello','world'];

        let mightBeUndefined: string | undefined = undefined; //string or undefied
        let nullableNumber: number | null = null; //number or null

        // 지정된 값만 사용
        let color: 'red' | 'orange' | 'yellow' = 'red';
        ```
    * [함수에 적용](./src/function.ts)

### 2. interface & type alias

* interface : class 또는 object 위한 타입 지정시 사용
    * class에 강제할 때 좋음
    * implements : 지정한 interface 조건 충족할 것을 명시
    * ```extends``` : interface 상속 
        * ```interface Developer extends Person``` (Person도 interface)
    * [class 강제](./src/interface_class.ts)
        ```ts
        interface Shape {
            // getArea함수가 반드시 있어야 하고, number 반환
            getArea(): number;
        }
        ```

    * [object 강제](./src/interface_object.ts)
        * ?
            * 해당 interface 구현해야하는 object등에서 구현안해도 됨
            * ```age? : number```

* type : class 또는 object 위한 타입 지정시 사용
    * object에 강제할 때 좋음
    * ```&``` : 2개 이상의 type을 결합 / interface도 이거 사용가능
        ```ts
        type Person2 = {
            name : string;
            age? : number;
        }

        type Developer2 = Person2 & {
            skills: string[];
        }
        ```
    * [예시](./src/typeAlias.ts)

* interface VS type
    * interface
        * 확장성 굳 : 같은 이름으로 여러번 선언 가능 - 컴파일 시점에서 합쳐짐
            ```ts
            interface Shape {
                // getArea함수가 반드시 있어야 하고, number 반환
                getArea(): number;
            }

            // 같은 이름으로 선언가능 - 확장성 있음
            interface Shape {
                something? : number;
            }
            ```
        * 외부에 노출해야 하는 public API의 경우 type보다는 interface 사용
    * type
        * union 필요시 사용 (```|```)
        * react component : props, state 기술하려면 type이 굳
        * 같은 이름으로 여러번 선언이 되지 않는다(즉, 합쳐지지 않음)
            ```ts
            type Person = {
                name : string;
                age? : number;
            }

            // 바로 밑 코드 : error (두 번 선언 불가능)
            // type Person = {
            //     something? : number;
            // }
            ```

### 3. generic

* 본래 타입이 필요가 없었던 javascript에는 생소한 개념이지만, 타입을 엄격히 지켰던 기존은 Java등에는 있는 개념
* [예제](./src/generic.ts)
* ```any```를 사용하면 안될 때
    * stack : 대개 범용적인 타입 수용
        ```ts
        class Stack {
            private data: any[] = [];

            contructor() {}

            push(item: any): void {
                this.data.push(item);
            }

            pop(): any {
                return this.data.pop();
            }
        }
        ```
        * 위처럼 쓰는 경우 data내의 다른 자료타입이 push할 때 들어갈 수 있음
    * generic으로 고친 경우
        ```ts
        class Stack<T> {
            private data: T[] = [];

            constructor() {}

            push(item: T): void {
                this.data.push(item);
            }

            pop(): T {
                return this.data.pop();
            }
        }
        ```

### 참고

[https://react.vlpt.us/using-typescript/01-practice.html](https://react.vlpt.us/using-typescript/01-practice.html)