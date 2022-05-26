function solve(string1,string2,string3) {
    let str1lenght = string1.length
    let str2lenght = string2.length
    let str3lenght = string3.length
    let sumlenghts = str1lenght+str2lenght+str3lenght
    console.log(sumlenghts);

    let divisionLenghs = Math.floor(sumlenghts/3)
    console.log(divisionLenghs);

}

solve('chocolate', 'ice cream', 'cake')