import { isOdd } from '@writetome51/is-odd-is-even';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';
import { errorIfNotAllValuesAreNumbers } from 'error-if-not-all-values-are-numbers';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';


// This function assumes that numbers have already been sorted in proper order
// before being passed in.  It doesn't check to make sure they are, so be sure.

export function __getMedianFromOrdered(orderedNumbers: number[]): number {
	errorIfNotPopulatedArray(orderedNumbers);
	let halfLength = orderedNumbers.length / 2;

	if (isOdd(orderedNumbers.length)) {
		let middleIndex = getRoundedDown(halfLength);
		errorIfNotNumber(orderedNumbers[middleIndex]);
		return orderedNumbers[middleIndex];
	}
	else {
		errorIfNotAllValuesAreNumbers([
			orderedNumbers[halfLength - 1], orderedNumbers[halfLength]
		]);
		return ((orderedNumbers[halfLength - 1] + orderedNumbers[halfLength]) / 2);
	}
}
