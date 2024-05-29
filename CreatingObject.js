let person=
{
    firstName: "Maneesha",
    lastName: "Reddy",
    age:20
}
console.log(person.age)
console.log(person["firstName"]) //(or)

for(let x in person)
{
    //console.log(x)
    //console.log(person[x])
    console.log(x+" "+person[x])
}

//Add new property to the existing object

//person["height"]=5.4;
//console.log(person["height"]);