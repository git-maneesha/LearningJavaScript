let num = 368
let count = 0

while(num>0){

    rem = num%10
    if(rem%2==0){
        count++
    }
    num=parseInt(num/10)
}
console.log("num of even ="+count)