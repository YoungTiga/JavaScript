function solve(num1,num2,operation) {
    let res;
    switch (operation) {
        case `+`: res = num1+num2; break;
        case `-`: res = num1-num2; break;
        case `*`: res = num1*num2; break;
        case `/`: res = num1/num2; break;
        case `%`: res = num1%num2; break;
        case `**`: res = num1**num2; break;
        default: 
            break;
    }
    console.log(res);
}

solve(5, 6, '+')
solve(3, 5.5, '*')
