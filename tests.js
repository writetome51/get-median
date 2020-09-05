import {getMedian} from './index.js';
// Test 1: error must be triggered if no argument is passed:
let errorTriggered = false;
try {
	let result = getMedian();
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 2: error must be triggered if empty array is passed:
errorTriggered = false;
try {
	let result = getMedian([]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 4: get median accurately when array length is odd:
let result = getMedian([19, 3, 5, 9, 11.2, 15, 1, 7, 17, 21, 13]);
if (result === 11.2) console.log('test 4 passed');
else console.log('test 4 FAILED');

// Test 5: get median accurately when array length is even:
result = getMedian([19, 3, 5, 7, 9, 11, 13.3, 15, 17, 21, 23, 1]);
if (result === 12.15) console.log('test 5 passed');
else console.log('test 5 FAILED');

// Test 6: get median accurately when array length is long (and odd):
let i = 0, numbers = [];
while (++i <= 99) {
	numbers.push(i);
}
result = getMedian(numbers);
let median = 50;
if (result === median) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 8: get median accurately when array length is even and values vary more:
result = getMedian([18, 3, 8, 48, 13, 23, 33, 68, 43, 53, 58, 38, 63, 28]);
median = 35.5;
if (result === median) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9: make sure array passed in is not modified:
let arr = [21, 1, 10];
result = getMedian(arr);
if (arr[0] === 21 && arr[1] === 1 && arr[2] === 10) console.log('test 9 passed');
else console.log('test 9 FAILED');


console.log(getMedian([19, 3, 5, 7, 9, 11, 13.3, 15, 21]));
// --> 11

console.log(getMedian([19, 3, 5, 7, 9, 11, 13.3, 15, 17, 21, 23, 1]));
// --> 12.15

console.log(getMedian([1, 2, '3', '0', 4, 5, 8]));
// --> 3

// Make sure each item in array is a number, or expect the
// unexpected:

console.log(getMedian([1, 2, 3, 'e', 4, 5, 8]));
// --> NaN

console.log(getMedian([1, 2, 3, false, 4, 5, 8]));
// --> 3

console.log(getMedian([1, 2, 3, 4, NaN, 7, 8, 9]));
// --> NaN
