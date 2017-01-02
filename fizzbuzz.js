/* LeetCode Challenge FIZZ Buzz
    Instructions: 
    Write a program that outputs the string representation of numbers from 1 to n.
    But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. 
    For numbers which are multiples of both three and five output “FizzBuzz”.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var final = [], i = 1, str;
    while (i <= n) {
        str = "";
        if (i % 15 === 0) {
            str = "FizzBuzz";
        } else if (i % 5 === 0) {
            str = "Buzz";
        } else if (i % 3 === 0) {
            str = "Fizz";
        } else {
            str += i;
        }
        i++;
        final.push(str);
    }
    return final;
};