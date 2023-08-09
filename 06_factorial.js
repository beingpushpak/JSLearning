var fact = 1;
function factorial(num){
    // 5 * 4 * 3 * 2 * 1
   if(num==1) {
    return fact;
   } else {
    fact = num * factorial(num-1); //5 * 4 * 3 * 2 * 1
   } 
}
factorial(5);
console.log(`Factorial using recursion is: ${fact}`);

function factorial(num) {
    if (num === 0) {
       return 1; 
    } else {
       return num * factorial(num - 1);  
    }
 }
 
 var result = factorial(5);
 console.log(`Factorial using recursion is: ${result}`);