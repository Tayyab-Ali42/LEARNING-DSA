// PROBLEM 1

const TwoSum = (numbers, target) => {
    let unique = new Map()

    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i]
        if (unique.has(complement)) {
            return [unique.get(complement), i]
        } else {
            unique.set(numbers[i], i)
        }

    }

}

// const numbers = [2, 7, 11, 15]
// const target = 9
// console.log(TwoSum(numbers, target))