function solve(arr) {
    let resSum = 0;
    let resInreverse = 0;
    let resConcat = "";
    
    for (var i in arr) {
        resSum += arr[i];
      }
    
    for (var i in arr) {
        resInreverse += 1/arr[i];
    }

    for (var i in arr) {
        resConcat += String(arr[i]);
      }
    
    console.log(resSum);
    console.log(resInreverse);
    console.log(resConcat);
}

solve([1, 2, 3])