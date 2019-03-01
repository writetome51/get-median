import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { getMedianFromOrdered } from './privy/getMedianFromOrdered';


export function getMedian(numbers): number {
	let orderedNumbers = getInAscendingOrder(numbers);
	return getMedianFromOrdered(orderedNumbers);
}
