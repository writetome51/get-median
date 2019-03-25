import { getInNumericOrder } from '@writetome51/get-in-numeric-order';
import { __getMedianFromOrdered } from './privy/__getMedianFromOrdered';


export function getMedian(numbers): number {
	let orderedNumbers = getInNumericOrder(numbers);
	return __getMedianFromOrdered(orderedNumbers);
}
