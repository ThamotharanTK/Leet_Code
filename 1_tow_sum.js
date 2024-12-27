
var twoSum = function (nums, target) {
    let obj = {};
    let numberToFind = null;
    for (let i = 0; i < nums.length; i++) {

        if (obj[nums[i]] != undefined || obj[nums[i]] != null) {
            return [i, obj[nums[i]]];
        }
        else {
            numberToFind = target - nums[i];
            obj[numberToFind] = i;

        }

    }
};
