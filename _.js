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
    },

    //swap object key value pairs
    invert(object) {

        const invertedObject = {};

        for (let key in object) {

            let originalValue = key;
            invertedObject.originalValue = key;

        }

        return invertedObject;
    },

    //returns undefined or true if predicate functions exist
    findKey(object, predicateFunction) {

        for (let key in object) {
            if (predicateFunction(object[key]) === true) {
                return key;
            }
        }
        
        return undefined;

    },

    //drop certain number of elements from beginning of array
    drop(arr, n) {

        //check if n is defined
        if (n === undefined) {
            n = 1;
        }

        return arr.slice(n);
    },

    //drop elements of an array as long as condition is true
    dropWhile(array, predicateFunction) {
        let i = array.findIndex((arr, index) => !(predicateFunction(arr, index, array)));
        return this.drop(array, i);
    },

    //break up array into arrays of smaller chunks
    chunk(array, size) {
        
        let chunks = [];

        //check if size is undefined and if it is make it 1
        if (size === undefined) {
            size = 1;
        }

        for (let i = 0; i < array.length; i += size) {
            let newArray = array.slice(i, i + size);
            chunks.push(newArray);
        }

        return chunks;
    }

};




// Do not write or modify code below this line.
module.exports = _;