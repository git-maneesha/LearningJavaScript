let x = "maneesha"
let count = 0

for(let i=0;i<=x.length;i++){

    if(x.charAt(i)==='a'||x.charAt(i)==='e'||x.charAt(i)==='i'||x.charAt(i)==='o'||x.charAt(i)==='u'){

    count++
    console.log(x.charAt(i))
    }


    
}
console.log(count)