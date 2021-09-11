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
        //if greater than or equal to upper, return false
        if ((number < lower) || (number >= upper)) {
            return false;
        }
        //otherwise, it is in range
        else {
            return true;
        }

    },

    //return array of words from text separated by a space
    words(text) {
        return text.split(" ");
    },

    //pad a string with spaces
    pad(text, length) {

        //if length is less than text length, return text
        if (length <= text.length) {
            return text;
        }
        //otherwise padd it
        else {
            let spacesNeeded = length - text.length;
            let beginningSpaces = Math.floor(spacesNeeded / 2);
            let endSpaces = spacesNeeded - beginningSpaces;
            
            //add spaces to beginning and end
            while (beginningSpaces > 0) {
                text = " " + text;
                beginningSpaces--;
            }
            while (endSpaces > 0) {
                text = text + " ";
                endSpaces--;
            }

            return text;
        }
    },

    //return if the value of a key is undefined or not 
    has(obj, key) {

        if (obj[key] === undefined) {
            return false;
        }
        else {
            return true;
        }
    }

};




// Do not write or modify code below this line.
module.exports = _;