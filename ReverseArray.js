let a = [43,56,78,90,86,54,21]
let rev = []
let count = 0

for(let j=a.length-1;j>=0;j--){

    rev[count++]= a[j]
}
console.log(rev)