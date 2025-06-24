const readline = require('readline');

const factorial = (num) => {
    if (num < 0) return "Invalid number";
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
};

const isPerfectNumber = (num) => {
    if (num <= 1) return false;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const num = parseInt(input);

    console.log(`Factorial of ${num} is: ${factorial(num)}`);
    console.log(`${num} is ${isPerfectNumber(num) ? "a perfect number" : "not a perfect number"}`);

    rl.close();
});
