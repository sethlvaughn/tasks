/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const bookEndArray: number[] = [];

    if (numbers.length == 0) {
        return numbers;
    }

    if (numbers.length == 1) {
        bookEndArray.push(numbers[0]);
        bookEndArray.push(numbers[0]);
        return bookEndArray;
    } else {
        bookEndArray.push(numbers[0]);
        bookEndArray.push(numbers[numbers.length - 1]);
        return bookEndArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripleNumbersArray: number[] = [];
    tripleNumbersArray = numbers.map((number: number): number => number * 3);
    return tripleNumbersArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let stringsToIntegersArray: number[] = [];

    stringsToIntegersArray = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );

    return stringsToIntegersArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeDollarsArray: number[] = amounts.map((amount) => {
        const num = parseFloat(amount.replace("$", ""));
        return isNaN(num) ? 0 : num;
    });

    return removeDollarsArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shoutIfExclaimingArray = messages
        .filter((message) => !message.endsWith("?"))
        .map((message) =>
            message.endsWith("!") ? message.toUpperCase() : message
        );
    return shoutIfExclaimingArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const countShortWordsArray = words.filter((word) => word.length < 4);
    return countShortWordsArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allRGBArray = ["red", "blue", "green"];
    return (
        colors.length === 0 ||
        colors.every((color) => allRGBArray.includes(color))
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    const makeMathArray = addends.join("+");

    const returnString: string = sum + "=" + makeMathArray;

    return returnString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Find the index of the first negative number, or the length of the array if there are no negatives
    const negativeIndex = values.findIndex((num) => num < 0);

    if (negativeIndex === -1) {
        // If there are no negative numbers, append the sum to the end
        const sum = values.reduce((acc, num) => acc + num, 0);
        return [...values, sum];
    } else {
        // Calculate the sum of numbers before the negative number
        const sum = values
            .slice(0, negativeIndex)
            .reduce((acc, num) => acc + num, 0);

        // Insert the sum after the negative number
        const negativeIndexArray = [
            ...values.slice(0, negativeIndex + 1),
            sum,
            ...values.slice(negativeIndex + 1)
        ];

        return negativeIndexArray;
    }
}

/**
 * I used Ryan G's function from discord under thread, "injectPositive array
 * function" as a starting point.
 */
