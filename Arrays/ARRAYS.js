// ARRAYS PROBLEMS

// PROBLEM 1

function printArrayInfo(arr) {
    console.log(arr[0])
    console.log(arr[arr.length - 1])
    console.log(arr.length)
}

const names = ["Ali", "Sara", "Ahmed", "Zara", "Usman"]

// printArrayInfo(names)

// PROBLEM 2

function printAll(numbers) {
    for (let number of numbers) {
        console.log(number)
    }
}

// const numbers = [1, 2, 3, 4, 5]
// printAll(numbers)

// PROBLEM 3

const findMax = (arr) => {
    let max = arr[0]

    for (const number of arr) {
        if (number > max) {
            max = number
        }
    }
    return max

}

// const numbers = [3, 7, 2, 9, 4, 20]
// console.log(findMax(numbers))

// PROBLEM 4 

const findIndex = (numbers, target) => {
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] === target) {
            return index
        }
    }
    return -1
}
// const numbers = [3, 7, 2, 9, 4, 20]
// console.log(findIndex(numbers, 7))
// console.log(findIndex(numbers, 9))
// console.log(findIndex(numbers, 99))


// PROBLEM 5

const reverseArray = (arr) => {
    let reversedArray = []
    for (let index = arr.length - 1; index >= 0; index--) {
        reversedArray.push(arr[index])
    }
    return reversedArray
}

const numbers = [3, 7, 2, 9, 4]
console.log(reverseArray(numbers))
