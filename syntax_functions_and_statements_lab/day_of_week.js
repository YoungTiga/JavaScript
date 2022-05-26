function solve(dayOfWeek) {
    let res;
    switch (dayOfWeek) {
        case "Monday":res = 1;break;
        case "Tuesday":res = 2;break;
        case "Wednesday":res = 3;break;
        case "Thursday":res = 4;break;
        case "Friday":res = 5;break;
        case "Saturday":res = 6;break;
        case "Sunday":res = 7;break;
        default: res = "error";break;
    }
    return res;
}

console.log(solve('Monday'));
console.log(solve('Friday'));
console.log(solve('Invalid'));
console.log(solve('Kur'));