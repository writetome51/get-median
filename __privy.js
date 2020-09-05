import {errorIfLengthIsZero} from 'error-if-length-is-zero';
import {getRoundedDown} from '@writetome51/get-rounded-up-down';
import {isOdd} from '@writetome51/is-odd-is-even';


export function getMedianFromOrdered(numbers) {
	errorIfLengthIsZero(numbers);
	const toNum = Number, length = numbers.length, halfLength = length / 2;

	if (isOdd(length)) {
		let middleIndex = getRoundedDown(halfLength);
		return toNum(numbers[middleIndex]);
	}
	else return (
		(toNum(numbers[halfLength - 1]) + toNum(numbers[halfLength])) / 2
	);
}
