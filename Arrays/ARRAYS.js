// ARRAYS PROBLEMS

// PROBLEM 1

function printArrayInfo(arr) {
    console.log(arr[0])
    console.log(arr[arr.length - 1])
    console.log(arr.length)
}

const names = ["Ali", "Sara", "Ahmed", "Zara", "Usman"]

printArrayInfo(names)

// PROBLEM 2

function printAll(numbers) {
    for (let number of numbers) {
        console.log(number)
    }
}

const numbers = [1, 2, 3, 4, 5]
printAll(numbers)

