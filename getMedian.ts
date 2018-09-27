import { isOdd } from '@writetome51/number-analysis-basic/isOdd_isEven';
import { getRoundedDown } 
	from '@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp';


// This function assumes that numbers have already been sorted in proper order
// before being passed in.  If you need a function that gets the median from unordered
// numbers, use getMedianFromUnordered().

export function getMedian(orderedNumbers: number[]): number {

	let halfLength = orderedNumbers.length / 2;

	if (isOdd(orderedNumbers.length)) {
		let middleIndex = getRoundedDown(halfLength);
		return orderedNumbers[middleIndex];
	}
	else {
		let lastNumberOfFirstHalf = orderedNumbers[halfLength - 1];
		let firstNumberOfSecondHalf = orderedNumbers[halfLength];
		return ((lastNumberOfFirstHalf + firstNumberOfSecondHalf) / 2);
	}
}
