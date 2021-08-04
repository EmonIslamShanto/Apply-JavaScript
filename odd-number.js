function ifOdd(number){
    if (number % 2 != 0){
        return true;
    }
    return false;
}

const myNumber = 13243;
const isMyNumberEven = ifOdd(myNumber);
console.log('My number is Odd ', isMyNumberEven);