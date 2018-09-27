import { getInAscendingOrder } from '@writetome51/get-in-ascending-order/getInAscendingOrder';
import { getMedian } from './getMedian';


export function getMedianFromUnordered(numbers: number[]): number {
	numbers = getInAscendingOrder(numbers);
	return getMedian(numbers);
}
