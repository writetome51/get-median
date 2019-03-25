"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_in_numeric_order_1 = require("@writetome51/get-in-numeric-order");
var __getMedianFromOrdered_1 = require("./privy/__getMedianFromOrdered");
function getMedian(numbers) {
    var orderedNumbers = get_in_numeric_order_1.getInNumericOrder(numbers);
    return __getMedianFromOrdered_1.__getMedianFromOrdered(orderedNumbers);
}
exports.getMedian = getMedian;
