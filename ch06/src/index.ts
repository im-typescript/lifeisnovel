// p. 143
/*
import {createRangeIterable} from "./utils/createRangeIterable";
const iterator = createRangeIterable(1, 3 + 1);
while(true) {
	const {value, done} = iterator.next();
	if(done) break;
	console.log(value);
}

*/

// p. 145
/*
import {RangeIterable} from "./utils/RangeIterable";
const iterator = new RangeIterable(1, 3 + 1);

for(let value of iterator)
	console.log(value);

*/

// p. 147
/*
import {StringIterable} from "./utils/StringIterable";
for(let value of new StringIterable(['hello', 'world', '!']))
	console.log(value);

*/

// p. 148
/*
import {generator} from "./utils/generator";
for(let value of generator())
	console.log(value);

 */

// p. 149
/*
const period = 1000;
let count = 0;
console.log('program started...');
const id = setInterval(() => {
	if(count >= 3) {
		clearInterval(id);
		console.log('program finished...');
	} else {
		console.log(++count);
	}
}, period);

 */

// p. 150
/*
import {rangeGenerator} from "./utils/rangeGenerator";

let iterator = rangeGenerator(1, 3 + 1);
while(true){
	const {value, done} = iterator.next();
	if(done) break;
	console.log(value);
}

for(let value of rangeGenerator(4, 6 + 1)){
	console.log(value);
}

 */

// p. 153
/*
function* gen12() {
	yield 1;
	yield 2;
}

export function* gen12345() {
	yield* gen12();
	yield* [3, 4];
	yield 5;
}

for(let value of gen12345()){
	console.log(value);
}

*/

// p. 155

import {random, gen} from './utils/yield-return';
const iter = gen();
while(true) {
	const {value, done} = iter.next(random(10, 1));
	if(done) break;
	console.log(value);
}

