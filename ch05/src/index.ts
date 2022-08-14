/*
import {split} from "./utils/split";
import {join} from "./utils/join";

let array = new Array;
array.push(1); array.push(2), array.push(3);
console.log(array);

let numbers = [1, 2, 3];
let strings = ['Hello', 'World'];
console.log(numbers, strings);

let a = [1, 2, 3];
let o = {name: 'JACK', age: 32};
console.log(Array.isArray(a), Array.isArray(o));

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = {name: string, age?: number};
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}];

console.log(
	split('hello'),
	split('h_e_l_l_o', '_')
);

console.log(
	join(['h', 'e', 'l', 'l', 'o']),
	join(['h', 'e', 'l', 'l', 'o'], '_')
);
 */
// p. 113
/*
const numbers: number[] = [1, 2, 3, 4, 5];
for(let index = 0; index < numbers.length; index++) {
	const item: number = numbers[index];
	console.log(item);
}

let array: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array;
console.log(first, second, third, rest);
*/

// p. 114
/*
let names = ['Jack', 'Jane', 'Steve'];
for(let index in names) {
	const name = names[index];
	console.log(`[${index}]: ${name}`)
}

let jack = {name: 'Jack', age: 32};
for(let property in jack){
	console.log(`${property}: ${jack[property]}`);
}
 */

// p. 115
/*
for(let name of ['Jack', 'Jane', 'Steve']){
	console.log(name);
}
 */

// p. 116
/*
import {arrayLength, isEmpty} from "./utils/arrayLength";
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = {name: string, age?: number};
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}];

console.log(
	arrayLength(numArray),
	arrayLength(strArray),
	arrayLength(personArray),
	isEmpty([]),
	isEmpty(numArray)
);

const identity = <T>(n: T): T => n;
console.log(
	identity<boolean>(true),
	identity(true)
);
 */

// p. 118
/*
let array1: number[] = [1];
let array2: number[] = [2, 3];
let mergedArray: number[] = [...array1, ...array2, 4];
console.log(mergedArray);

import {range} from './utils/range';
let numbers: number[] = range(1, 9 + 1);
console.log(numbers);
*/

// p. 120
/*
let sum = 0;
for(let val = 1; val <= 100; ){
	sum += val++;
}
console.log(sum);

import {range} from './utils/range';
let numbers: number[] = range(1, 100 + 1);
console.log(numbers);
 */

// p. 122
/*
import {range} from './utils/range';
import {fold} from './utils/fold';

let numbers: number[] = range(1, 100 + 1);
let result = fold(numbers, (result, value) => result + value, 0);
console.log(result);
*/

// p. 123
/*
import {range} from './utils/range';
import {fold} from './utils/fold';
import {filter} from './utils/filter';
import {map} from './utils/map';

let numbers: number[] = range(1, 100 + 1);
const isOdd = (n: number): boolean => n % 2 != 0;
let oddSum = fold(filter(numbers, isOdd), (oddSum, value) => oddSum + value, 0);
console.log(oddSum);

const isEven = (n: number): boolean => n % 2 == 0;
let evenSum = fold(filter(numbers, isEven), (evenSum, value) => evenSum + value, 0);
console.log(evenSum);

let powerSum = fold(map(numbers, value => value * value), (powerSum, value) => powerSum + value, 0);
console.log(powerSum);
*/

// p. 127
/*
const multiply = (result, val) => result * val;

let numbers: number [] = [1, 2, 3, 4,5, 6, 7, 8, 9, 10];
let tempResult = numbers
	.filter(val => val % 2 != 0)
	.map(val => val * val)
	.reduce(multiply, 1);
let result = Math.round(Math.sqrt(tempResult));
console.log(result);
 */

// p. 128
/*
import {range} from './utils/range';

const array: number[] = range(1, 10 + 1);

let odds: number[] = array.filter((value) => value % 2 != 0);
let evens: number[] = array.filter((value) => value % 2 == 0);
console.log(odds, evens);

const half = array.length / 2;
let belowHalf: number[] = array.filter((v, index) => index < half);
let overHalf: number[] = array.filter((v, index) => index >= half);
console.log(belowHalf, overHalf);

let squares: number[] = range(1, 5 + 1)
	.map((val, index) => val * val);
console.log(squares);

let names: string[] = range(1, 5 + 1)
	.map((val, index) => `[${index}]: ${val}`);
console.log(names);

let reduceSum: number = range(1, 100 + 1)
	.reduce((result: number, value: number) => result + value, 0);
console.log(reduceSum);

let reduceMultipy: number = range(1, 10 + 1)
	.reduce((result: number, value: number) => result * value, 1);
console.log(reduceMultipy);

 */

// p. 133
/*
let original = 1;
let copied = original;
copied += 2;
console.log(original, copied);

const originalArray = [5, 3, 9, 7];
const shallowCopiedArray = originalArray;
shallowCopiedArray[0] = 0;
console.log(originalArray, shallowCopiedArray);

 */

// p. 134
/*
const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray);

import {pureSort} from "./utils/pureSort";

let beforeSort = [6, 2, 9, 0];
const afterSort = pureSort(beforeSort);
console.log(beforeSort, afterSort);

*/

// p. 135
/*
import {pureDelete} from "./utils/pureDelete";

const mixedArray: object[] = [
	[], {name: 'Jack'}, {name: 'Jane', age: 32}, ['description']
];
const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val));
console.log(mixedArray, objectsOnly);

 */

// p. 136

import {mergeArray} from "./utils/mergeArray";

const mergedArray1: string[] = mergeArray(
	['Hello', 'World']
);
console.log(mergedArray1);

const mergedArray2: number[] = mergeArray(
	[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]
);
console.log(mergedArray2);



// p. 139
/*
import {doSomething} from "./utils/doSomething";

const [result, errorMessage] = doSomething();
console.log(result, errorMessage);
 */