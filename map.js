// old way ----------------

const numbers = [2, 8, 4, 6, 3];
const doubledArr = [];
for (let i = 0; i < numbers.length; i++) {
    const index = numbers[i];
    const doubled = index * 2;
    doubledArr.push(doubled);
}
console.log(doubledArr);


// by map -----------------------

const numbers2 = [2, 8, 4, 6, 3];
const double = numbers2.map(item => item * 2);
console.log(double);
