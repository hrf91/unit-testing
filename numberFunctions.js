//function
//getLargest(3, 5, 2) -> 5
const getLargest = (a, b, c) => {
    if (a && b && c) {
        return Math.max(a, b, c);
    } else {
        throw 'Error: all inputs must have a value.';
    }
    
}

const getSmallest = (a, b, c) => {
    if (a && b && c) {
        return Math.min(a, b, c);
    } else {
        throw 'Error: all inputs must have a value.';
    }
}

//export the function so it's available to other files
module.exports = {
    getLargest: getLargest,
    getSmallest: getSmallest
}
