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


const findDuplicates = (numbers) => {
    let seen = new Map()
    let duplicates = new Set()

    for (const element of numbers) {
        if (seen.has(element)) {
            duplicates.add(element)
        } else {
            seen.set(element, true)
        }
    }

    return [...duplicates]

}




// const numbers = [1, 2, 3, 1, 5, 1, 4, 2, 5, 5]
// console.log(findDuplicates(numbers))