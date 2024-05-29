function findLargestNumber(num1, num2, num3) {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    return largest;
}

num1 = 30;
num2 = 48;
num3 = 60;
let largestNumber = findLargestNumber(num1, num2, num3);
console.log("The largest number is:", largestNumber);
