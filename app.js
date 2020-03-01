function isPalindrome(string) {
    let arrString = string.split("");
    let count = 0;
    let firstNumber = 0;
    let lastNumber = arrString.length - 1;
    for (let i = 0; i < (arrString.length / 2) - 1; i++) {
        if (arrString[firstNumber + i] === arrString[lastNumber - i]) {
            count++;
        }
    }
    if (count === parseInt(arrString.length / 2)) {
        return true;
    } else return false;
}

let result = isPalindrome("abphihpba");
console.log(result);