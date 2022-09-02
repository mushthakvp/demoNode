var read = require("readline-sync");

num1 = read.question("enter 2 numbers")
num2 = read.question("")

console.log(num1,num2)

if (num1 > num2) {
    console.log('larger is '+num2)
}else{
    console.log('smaller is'+num1)
}