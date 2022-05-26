function solve(num1,num2,num3) {
    let res;

    if (num1>num2 && num1>num3) {
        res = num1
    }else if (num2>num1 && num2>num3) {
        res = num2
    }else if (num3>num1 && num3>num2) {
        res = num3
    }
    console.log(`The largest number is ${res}.`);
}

solve(5, -3, 16)
solve(-3, -5, -22.5)