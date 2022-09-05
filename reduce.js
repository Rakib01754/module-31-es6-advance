// sum of an arrays elements by using reduce 


const numbers = [101, 20, 151, 654, 1364, 354641, 3546];
const sumation = numbers.reduce((previous, current) => previous + current, 0);
console.log(sumation);