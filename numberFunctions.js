//function
//getLargest(3, 5, 2) -> 5
const getLargest = (a, b, c) => {
    return Math.max(a, b, c);
}

const getSmallest = (a, b, c) => {
    return Math.min(a, b, c);
}

//export the function so it's available to other files
module.exports = {
    getLargest: getLargest,
    getSmallest: getSmallest
}
