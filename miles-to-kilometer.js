function milesToKilometer(miles){
    var kilometer = miles * 1.60934;
    return kilometer;
}
var marathon = milesToKilometer(26.2);
console.log('Marathon in kilometer: ', marathon);
