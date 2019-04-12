import { isOdd } from '@writetome51/is-odd-is-even';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';
import { errorIfNotAllFiniteNumbers } from 'error-if-not-all-finite-numbers';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';


// This function assumes that numbers have already been sorted in proper order
// before being passed in.  It doesn't check to make sure they are, so be sure.

export function __getMedianFromOrdered(orderedNumbers: number[]): number {
	errorIfNotPopulatedArray(orderedNumbers);
	let halfLength = orderedNumbers.length / 2;

	if (isOdd(orderedNumbers.length)) {
		let middleIndex = getRoundedDown(halfLength);
		errorIfNotFiniteNumber(orderedNumbers[middleIndex]);
		return orderedNumbers[middleIndex];
	}
	else {
		errorIfNotAllFiniteNumbers([
			orderedNumbers[halfLength - 1], orderedNumbers[halfLength]
		]);
		return ((orderedNumbers[halfLength - 1] + orderedNumbers[halfLength]) / 2);
	}
}
