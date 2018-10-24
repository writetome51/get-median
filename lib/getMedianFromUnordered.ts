import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { getMedianFromOrdered } from './getMedianFromOrdered';


export function getMedianFromUnordered(numbers: number[]): number {
	let orderedNumbers = getInAscendingOrder(numbers);
	return getMedianFromOrdered(orderedNumbers);
}
