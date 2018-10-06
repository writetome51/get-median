"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isOdd_isEven_1 = require("@writetome51/number-analysis-basic/isOdd_isEven");
var getRounded_getRoundedDown_getRoundedUp_1 = require("@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp");
var error_if_not_all_values_are_numbers_1 = require("error-if-not-all-values-are-numbers");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
// This function assumes that numbers have already been sorted in proper order
// before being passed in.  If you need a function that gets the median from unordered
// numbers, use getMedianFromUnordered().
function getMedian(orderedNumbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(orderedNumbers);
    var halfLength = orderedNumbers.length / 2;
    if (isOdd_isEven_1.isOdd(orderedNumbers.length)) {
        var middleIndex = getRounded_getRoundedDown_getRoundedUp_1.getRoundedDown(halfLength);
        errorIfNotNumber_1.errorIfNotNumber(orderedNumbers[middleIndex]);
        return orderedNumbers[middleIndex];
    }
    else {
        error_if_not_all_values_are_numbers_1.errorIfNotAllValuesAreNumbers([
            orderedNumbers[halfLength - 1], orderedNumbers[halfLength]
        ]);
        return ((orderedNumbers[halfLength - 1] + orderedNumbers[halfLength]) / 2);
    }
}
exports.getMedian = getMedian;
