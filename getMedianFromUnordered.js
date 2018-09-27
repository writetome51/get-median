"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getInAscendingOrder_1 = require("@writetome51/get-in-ascending-order/getInAscendingOrder");
var getMedian_1 = require("./getMedian");
function getMedianFromUnordered(numbers) {
    numbers = getInAscendingOrder_1.getInAscendingOrder(numbers);
    return getMedian_1.getMedian(numbers);
}
exports.getMedianFromUnordered = getMedianFromUnordered;
var set = [20, 5, 10, 2, 30, 6, 1];
console.log(getMedianFromUnordered(set));
