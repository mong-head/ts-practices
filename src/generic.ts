// function에서 사용
function merge<A,B>(a:A, b:B): A & B {
    return {
        ...a,
        ...b
    }
}

const merged = merge({foo:1},{bar:1})
console.log(merged) //{ foo: 1, bar: 1 }

function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);
console.log(wrapped)

// interface에서 사용
interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['1','2','3']
}

// type에서 사용
type Itemss<T> = {
    list: T[];
}

const itemss: Itemss<number> = {
    list: [1,2,3]
}

// class에서 사용
class Queue<T> {
    list: T[] = [];
    
    get length(){
        return this.list.length;
    }
    enqueue(item: T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());