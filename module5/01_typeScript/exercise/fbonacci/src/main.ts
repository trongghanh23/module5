function fibonacci(numberArray: number): number {

    if (numberArray < 2) return numberArray;
    return fibonacci(numberArray - 1) + fibonacci(numberArray - 2);

}

let sum: number = 0;
let size: number = 10;
let array: Array<number> = [];
for (let i:number=0; i < size; i++) {
    array.push(fibonacci(i))
    sum += fibonacci(i)

}
console.log("Dãy số fibonacci:" + array)
console.log("Tổng các số fibonacci:" + sum)



