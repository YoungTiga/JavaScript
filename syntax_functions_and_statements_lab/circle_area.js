function solve(radius) {
    let typeOfInput = typeof(radius)

    if (typeOfInput === "number") {
        let res = Math.pow(radius,2)*Math.PI
        console.log(res.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}

solve(5)
solve('name')