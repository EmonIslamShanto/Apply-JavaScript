// Variable
var time = "10:15";
var bookPrice = 150;
var isWhiteColor = true;

// Array
var partners = ['Naimur','Beniamine','Turza','Istiak','Rabiul'];
var elements = partners.length;
var TurzaIndex = partners.indexOf('Turza');
partners.push('Shafayet');
partners.pop();

// Conditional
if (bookPrice < 100){
    console.log('I will buy thi book');
}
else{
    console.log('Discount needed');
}

// While Loop
var i = 0;
while(i <= 17){
    // do some work
    i++;
}

// For Loop
for (var i = 0; i<= 17; i++){
    // do some work
}

// Function
function isMoonUp(){
    // do some work
    return true;
}

var moonStatus = isMoonUp();

// Function Parameters
function isMoonUp(time){
    if(time>=19 && time<=5){
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(12);

// Let Const
// Could change
let price = 27;
// Could not change
const prices = 'Naim Siddiqui';