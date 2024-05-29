/*let x = 1
let num = 10

for(let i=0;i<=num;i++){


console.log(1+"*"+x+"="+x)
}

let x ='hi',y = 100

console.log(x,y)


function welcome(){

    console.log('javascript')
}
welcome();


let fruits=["orange","kiwi","grapes"];

delete fruits[0]

console.log(fruits)

let a = "manu"
let b =""
for(let i =a.length;i>=0;i--)
{
    b = b+a.charAt(i)
    console.log(b)
}*/

let num = 123
let rev = 0 
while(num>0)
{
    rem = num%10
    rev = rev*10 + rem
    num = parseInt(num/10)
}
console.log(rev + " reverse number")


let b = 20
let sum = 0

for(let i=sum;i<=b;i++)
{
    sum = i
}
console.log(sum)
