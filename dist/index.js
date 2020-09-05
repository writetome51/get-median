import { getArrayCopy } from '@writetome51/get-array-copy';
import { getMedianFromOrdered } from './__privy.js';
import { orderNumerically } from '@writetome51/order-numerically';


export function getMedian(numbers) {
    let orderedNumbers = getOrdered(numbers);
    return getMedianFromOrdered(orderedNumbers);


    function getOrdered(numbers) {
        numbers = getArrayCopy(numbers);
        orderNumerically(numbers);
        return numbers;
    }
}
