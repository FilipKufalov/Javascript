let numbers = [91, 1, 0, 50, 85, 15, 400]

function getMaxArray(array) {
    if (array.length > 0) {
        return Math.max(...array)
    } else {
        return "Array is not valid or emtpy";
    }
}

function getMinArray(array) {
    if (array.length > 0) {
        return Math.min(...array)
    } else {
        return "Array is not valid or emtpy";
    }
}

console.log("Max Value from Array is: " + getMaxArray(numbers));
console.log("Min Value from Array is: " + getMinArray(numbers));