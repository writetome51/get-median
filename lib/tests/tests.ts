import { getMedian } from '../index';


// Test 1: error must be triggered if no argument is passed:
let errorTriggered = false;
try {
	let result = getMedian();
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: error must be triggered if empty array is passed:
errorTriggered = false;
try {
	let result = getMedian([]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: error must be triggered if middle item(s) in array are anything other than
// a number:
let errorsTriggered = 0;
try {
	let result = getMedian([1, 2, 3, 'e', 4, 5, 8]);
}
catch (e) {
	++errorsTriggered;
}
try {
	let result = getMedian([1, 2, 3, false, 4, 5, 8]);
}
catch (e) {
	++errorsTriggered;
}
try {
	let result = getMedian([1, 2, 3, 4, [], 7, 8, 9]);
}
catch (e) {
	++errorsTriggered;
}
try {
	let result = getMedian([1, 2, 3, 3.5, undefined, 4, 5, 8]);
}
catch (e) {
	++errorsTriggered;
}
try {
	let result = getMedian([1, 2, {}, 7, 8]);
}
catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 5) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: get median accurately when array length is odd:
let result = getMedian([19, 3, 5, 9, 11.2, 15, 1, 7, 17, 21, 13]);
if (result === 11.2) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: get median accurately when array length is even:
result = getMedian([19, 3, 5, 7, 9, 11, 13.3, 15, 17, 21, 23, 1]);
if (result === 12.15) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: get median accurately when array length is long (and odd):
let i = 0, numbers = [];
while (++i <= 999999) { // array will have odd length.
	numbers.push(i);
}
result = getMedian(numbers);
let median = 500000;
if (result === median) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: get median accurately when array length is long (and even):
i = 0;
numbers = [];
while (++i <= 1000000) { // array will have even length.
	numbers.push(i);
}
result = getMedian(numbers);
median = 500000.5;
if (result === median) console.log('test 7 passed');
else console.log('test 7 failed');


// Test 8: get median accurately when array length is even and values vary more:
result = getMedian([18, 3, 8, 48, 13, 23, 33, 68, 43, 53, 58, 38, 63, 28]);
median = 35.5;
if (result === median) console.log('test 8 passed');
else console.log('test 8 failed');