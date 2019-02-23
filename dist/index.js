"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_in_ascending_order_1 = require("@writetome51/get-in-ascending-order");
var getMedianFromOrdered_1 = require("./getMedianFromOrdered");
function getMedian(numbers) {
    var orderedNumbers = get_in_ascending_order_1.getInAscendingOrder(numbers);
    return getMedianFromOrdered_1.getMedianFromOrdered(orderedNumbers);
}
exports.getMedian = getMedian;
