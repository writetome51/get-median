"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getInAscendingOrder_1 = require("./getInAscendingOrder");
var getMedian_1 = require("./getMedian");
function getMedianFromUnordered(numbers) {
    numbers = getInAscendingOrder_1.getInAscendingOrder(numbers);
    return getMedian_1.getMedian(numbers);
}
exports.getMedianFromUnordered = getMedianFromUnordered;
