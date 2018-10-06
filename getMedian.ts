import { isOdd } from '@writetome51/number-analysis-basic/isOdd_isEven';
import { getRoundedDown }
	from '@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp';
import { errorIfNotAllValuesAreNumbers } from 'error-if-not-all-values-are-numbers';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';


// This function assumes that numbers have already been sorted in proper order
// before being passed in.  If you need a function that gets the median from unordered
// numbers, use getMedianFromUnordered().

export function getMedian(orderedNumbers: number[]): number {
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
