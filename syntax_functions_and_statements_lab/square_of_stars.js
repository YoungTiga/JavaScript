function solve(num) {
    let resString = ''
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            resString += '* '
        }
        resString += '\n'
    }
    console.log(resString);
}
solve(2)