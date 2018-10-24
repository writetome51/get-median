"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_odd_is_even_1 = require("@writetome51/is-odd-is-even");
var get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
var error_if_not_all_values_are_numbers_1 = require("error-if-not-all-values-are-numbers");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
// This function assumes that numbers have already been sorted in proper order
// before being passed in.  It doesn't check to make sure they are, so be sure.
function getMedianFromOrdered(orderedNumbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(orderedNumbers);
    var halfLength = orderedNumbers.length / 2;
    if (is_odd_is_even_1.isOdd(orderedNumbers.length)) {
        var middleIndex = get_rounded_up_down_1.getRoundedDown(halfLength);
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
exports.getMedianFromOrdered = getMedianFromOrdered;
