// PROBLEM 1

const reverseString = (str) => {
    let reversedStr = ""
    for (let index = str.length - 1; index >= 0; index--) {
        reversedStr += str[index]
    }
    return reversedStr
}

// const str = "hello"
// console.log(reverseString(str))


// PROBLEM 2

function isPalindrome(str) {
    let reversedStr = ""
    for (let index = str.length - 1; index >= 0; index--) {
        reversedStr += str[index]
    }

    return reversedStr === str ? true : false

}

// console.log(isPalindrome("hello"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("madam"))

// PROBLEM 3


const countVowels = (str) => {
    const vowels = "aeiou"
    let count = 0
    for (const element of str) {
        if (vowels.includes(element.toLowerCase())) {
            count++
        }
    }
    return count
}

// const str = "javascript"
// const str = "hellO"
// console.log(countVowels(str))

// PROBLEM 4

const firstCapitilize = (str) => {
    const firstChar = str[0].toUpperCase()
    let restOfStr = ""
    for (let index = 1; index < str.length; index++) {
        restOfStr += str[index]
    }
    return firstChar + restOfStr
}

// const str = "javascript"
// console.log(firstCapitilize(str))

