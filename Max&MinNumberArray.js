let x = [20,64,1445,96,101]

let max = x[0]
let min = x[0]

 for(let i=0;i<x.length;i++){

 if(x[i]>max){
    max = x[i]
}

 if (x[i] < min) {
    min = x[i];
 
   }
 }
 console.log("maximum number:" ,max)
 console.log("minimum number:" ,min)