let x = [10, 10, 45, 45, 86, 86, 55]
let y = []


for (let i = 0; i < x.length; i++) {

    if (y.indexOf(x[i]) === -1) 
    {
        y.push(x[i]);
    }
}

console.log(y);
