const _ = {

    //return the clamped value (if below min -> min, if above max -> max, if in range -> number)
    clamp(number, lower, upper) {

        return Math.min(Math.max(number, lower), upper);

    }

};




// Do not write or modify code below this line.
module.exports = _;