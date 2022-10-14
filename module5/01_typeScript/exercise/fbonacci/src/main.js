function fibonacci(numberArray) {
    if (numberArray < 2)
        return numberArray;
    return fibonacci(numberArray - 1) + fibonacci(numberArray - 2);
}
var sum = 0;
var size = 10;
var array = [];
for (var i = 0; i < size; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Dãy số fibonacci:" + array);
console.log("Tổng các số fibonacci:" + sum);
