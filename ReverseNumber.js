let x = 121/10;
console.log(parseInt(x))

x=316

let temp = x
let rev = 0
while(temp>0){
    let rem = temp%10
    rev = rev*10+rem
    temp = parseInt(temp/10)
}
console.log("original num"+x)
console.log(rev + " reverse number")