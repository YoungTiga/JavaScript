function solve(month, year){
    let d = new Date(year, month, 0)
    return d.getDate()
}

console.log(solve(1, 2012));
console.log(solve(2, 2021));