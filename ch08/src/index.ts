// p. 183
/*
import {inc} from './utils/first-order-func';
console.log(inc(1));



// p. 184

import {add} from "./utils/second-order-func";
console.log(add(1)(2));

import {add3} from "./utils/third-order-func";
console.log(add3(1)(2)(3));


*/
// p. 185
/*
import {FirstOrderFunc, SecondOrderFunc} from "./utils/function-signature";
import {add} from "./utils/second-order-func";
// 버전 업에 따라 실행 안됨
const addOne: SecondOrderFunc<number, number> = add(1);
console.log(
	addOne(2), add(1)(2)
);

import {add3} from "./utils/third-order-func";
const add2: SecondOrderFunc<number, number> = add3(1);
const add1: FirstOrderFunc<number, number> = add2(2);
console.log(
	add1(3), add2(2)(3), add3(1)(2)(3)
)

 */

// p. 187
/*
const makeNames = (): () => string => {
	const names = ['Jack', 'Jane', 'Smith'];
	let index = 0;
	return (): string => {
		if(index == names.length){
			index = 0;
		}
		return names[index++];
	}
}

const makeName: () => string = makeNames();
console.log([1, 2, 3, 4, 5, 6].map(n => makeName()));
 */