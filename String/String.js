// PROBLEM 1

const reverseString = (str) => {
    let reversedStr = ""
    for (let index = str.length - 1; index >= 0; index--) {
        reversedStr += str[index]
    }
    return reversedStr
}

const str = "hello"
console.log(reverseString(str))
