function ifEven(number){
    if (number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 13243;
const isMyNumberEven = ifEven(myNumber);
console.log('My number is even ', isMyNumberEven);