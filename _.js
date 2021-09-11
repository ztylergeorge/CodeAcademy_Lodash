const _ = {

    //return the clamped value (if below min -> min, if above max -> max, if in range -> number)
    clamp(number, lower, upper) {

        return Math.min(Math.max(number, lower), upper);

    },

    //return if the number is in range between lower and upper
    inRange(number, lower, upper) {

        //make lower 0 and upper the lower if lower does not exist
        if (upper === undefined) {
            upper = lower;
            lower = 0;
        }

        //swap lower and upper if upper is larger than lower 
        if (Math.min(lower, upper) === upper) {
            let temp = lower;
            lower = upper;
            upper = temp;
        }

        //if less than lower, return false
        if (number < lower) {
            return false;
        }
        //if greater than or equal to upper, return false
        else if (number >= upper) {
            return false;
        }
        //otherwise, it is in range
        else {
            return true;
        }

        

    }

};




// Do not write or modify code below this line.
module.exports = _;