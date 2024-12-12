const foods = ['Pizza', 'Cheeseburger',];
console.log('Exercise 1 results:', foods);
console.log('Exercise 2 results',foods);


foods.unshift('taco')
console.log('Exercise 2 results',foods);


let favFood = [foods[1]]
console.log('Exercise 3 results:', foods);


foods.splice(2,0, 'tofu')
console.log('Exercise 5 results:',foods);


foods.splice(1,1,'sushi','cupcake')
console.log('Exercise 6 resutlts:',foods);


const yummy = foods.slice(1,3)
console.log('Exercise 7 results:', yummy);


const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 results:', soyIdx);


const allFood = foods.join('->')
console.log('Exercise 9 results:', allFood);


const hasSoup = foods.includes('soup')
console.log('Exercise 10 results:', hasSoup)


const odds = []
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

for (let i = 0; i < nums.length; i++){
    if(nums[i] %2 !=0){
        odds.push(nums[i])
    }
}
console.log('Exercise 11 results:',odds)

const fizz = []
const buzz = []
const fizzbuzz = []

nums.forEach((num) => {
    if(num%3 ==0){
        fizz.push(num)
    }
    if(num%5 ==0){
        buzz.push(num)
    }
    if(num %3 ==0 && num%5==0){
        fizzbuzz.push(num)
    }
}
)

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[3]

console.log('Exercise 13 result:', numList);

const num = numArrays[2][1]

console.log('Exercise 14 result:', num);

let total = 0
numArrays.forEach((array)=>{
    array.forEach((num) => {
        total += num
    })
})

console.log('Exercise 15 result:\n', total);