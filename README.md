# getMedian(numbers): number   
   
Returns median of `numbers`. Does not modify `numbers`.  

## Examples
```js
getMedian([19, 3, 5, 9, 11.2, 15, 1, 7, 17, 21, 13]);
// --> 11.2

getMedian([19, 3, 5, 7, 9, 11, 13.3, 15, 17, 21, 23, 1]);
// --> 12.15

getMedian([1, 2, '3', '0', 4, 5, 8]);
// --> 3

// Make sure each item in array is a number, or expect the 
// unexpected:

getMedian([1, 2, 3, 'e', 4, 5, 8]);
// --> NaN

getMedian([1, 2, 3, false, 4, 5, 8]);
// --> 3

getMedian([1, 2, 3, 4, NaN, 7, 8, 9]);
// --> NaN
```

## Installation
`npm i  @writetome51/get-median`


## Loading
```js
import { getMedian } from '@writetome51/get-median'; 
```
