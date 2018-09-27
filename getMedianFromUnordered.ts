import { getInAscendingOrder } from './getInAscendingOrder';
import { getMedian } from './getMedian';


export function getMedianFromUnordered(numbers: number[]): number {
	numbers = getInAscendingOrder(numbers);
	return getMedian(numbers);
}