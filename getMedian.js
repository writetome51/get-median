"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isOdd_isEven_1 = require("@writetome51/number-analysis-basic/isOdd_isEven");
var getRounded_getRoundedDown_getRoundedUp_1 = require("@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp");
// This function assumes that numbers have already been sorted in proper order
// before being passed in.  If you need a function that gets the median from unordered
// numbers, use getMedianFromUnordered().
function getMedian(orderedNumbers) {
    var halfLength = orderedNumbers.length / 2;
    if (isOdd_isEven_1.isOdd(orderedNumbers.length)) {
        var middleIndex = getRounded_getRoundedDown_getRoundedUp_1.getRoundedDown(halfLength);
        return orderedNumbers[middleIndex];
    }
    else {
        var lastNumberOfFirstHalf = orderedNumbers[halfLength - 1];
        var firstNumberOfSecondHalf = orderedNumbers[halfLength];
        return ((lastNumberOfFirstHalf + firstNumberOfSecondHalf) / 2);
    }
}
exports.getMedian = getMedian;
