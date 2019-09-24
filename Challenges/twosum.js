/**
 * Two Sum Easy
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

 //brute force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                result.push(i, j);
            }
        }
    }
    return result;
};



 //more efficient
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(numsMap.has(target - nums[i])) {
            return[numsMap.get(target - nums[i]), i];
        } else {
            numsMap.set(nums[i], i);
        }
    }
};
