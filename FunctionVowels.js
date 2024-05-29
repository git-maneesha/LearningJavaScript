function countVowels(str) {
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let vowelCount = 0;
    
    for (let char of str) {
        
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

inputString = "Maneesha";
numOfVowels = countVowels(inputString);
console.log("Number of vowels in the string:", numOfVowels);
