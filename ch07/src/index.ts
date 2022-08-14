// @ts-nocheck

import {readFileSync, readFile} from "fs";
import {constants} from "os";
import EROFS = module
import {readFilePromise} from "./utils/readFilePromise";

// p. 159
/*
console.log('read package.json using synchronous api...');
const buffer: Buffer = readFileSync('./package.json');
console.log(buffer.toString());

readFile('./package.json', (error: Error, buffer: Buffer) => {
	console.log('read package.json using asynchronous api...');
	console.log(buffer.toString());
});

const readFilePromise = (filename: string): Promise<string> =>
	new Promise<string>((resolve, reject) => {
		readFile(filename, (error: Error, buffer: Buffer) => {
			if(error){
				reject(error);
			}else{
				resolve(buffer.toString());
			}
		})
	});

(async () => {
	const content = await readFilePromise('./package.json');
	console.log('read package.json using Promise and async/await...');
	console.log(content);
})
 */

// p. 160
/*\
const buffer: Buffer = readFileSync('./package.json');
const content: string = buffer.toString();
console.log(content);

 */

// p. 161
/*
readFile('./package.json', (err: Error, buffer: Buffer) => {
	if(err){
		throw err;
	}else{
		const content: string = buffer.toString();
		console.log(content);
	}
});

 */

// p. 162
/*
readFile('./package.json', (err: Error, buffer: Buffer) => {
	if(err){
		throw err;
	}else{
		const content: string = buffer.toString();
		console.log(content);

		readFile('./tsconfig.json', (err: Error, buffer: Buffer) => {
			if(err){
				throw err;
			}else{
				const content: string = buffer.toString();
				console.log(content);
			}
		})
	}
})

 */

// p. 165
/*
import {readFilePromise} from "./utils/readFilePromise";

readFilePromise('./package.json')
	.then((content: string) => {
		console.log(content);
		return readFilePromise('./tsconfig.json');
	})
	.then((content: string) => {
		console.log(content);
		return readFilePromise('.');
	})
	.catch((err: Error) => console.log('error:', err.message))
	.finally(() => console.log('End program'));

 */

// p. 167
/*
Promise.resolve(1)
	.then(value => console.log(value));

Promise.resolve('hello')
	.then(value => console.log(value));

Promise.resolve([1, 2, 3])
	.then(value => console.log(value));

Promise.resolve({name: 'Jack', age: 32})
	.then(value => console.log(value));

Promise.reject(new Error('에러 발생'))
	.catch((err: Error) => console.log('error:', err.message));

 */

// p. 168
/*
Promise.resolve(1)
	.then((value: number) => {
		console.log(value);
		return Promise.resolve(true);
	})
	.then((value: boolean) => {
		console.log(value);
		return [1, 2, 3];
	})
	.then((value: number[]) => {
		console.log(value);
		return {name: 'jack', age: 32};
	})
	.then((value: {name: string, age: number}) => {
		console.log(value);
	})

const isAllTrue = (values: boolean[]) => values.every((value => value));

console.log(
	isAllTrue([true, true, true]),
	isAllTrue([false, true, true])
);

 */

// p. 169
/*
const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises);
const getAllSettledResult = <T>(promises: Promise<T>[]) => Promise.allSettled(promises);

getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')])
	.then(result => console.log(result));

getAllResolvedResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
	.then(result => console.log(result))
	.catch(error => console.log('error:', error.message));

getAllSettledResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
	.then(result => console.log(result))
	.catch(error => console.log('error:', error.message));

const isAnyTrue = (values: boolean[]) => values.some((value => value));

console.log(
	isAnyTrue([false, true, false]),
	isAnyTrue([false, false, false])
);
*/

// p. 170
/*
Promise.race([Promise.resolve(true), Promise.resolve('hello')])
	.then(value => console.log(value));

Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
	.then(value => console.log(value))
	.catch(error => console.log(error.message));

Promise.race([Promise.reject(new Error('error')), Promise.resolve(true)])
	.then(value => console.log(value))
	.catch(error => console.log(error.message));
 */

// p. 171
/*
const test = async () => {
	const value = await Promise.resolve(1);
	console.log(value);
}
test();

 */
// p. 172
/*
const test1 = async () => {
	let value = await 'test 1A';
	console.log(value);
	value = await Promise.resolve('test 1B');
	console.log(value);
}

async function test2() {
	let value = await 'test 2A';
	console.log(value);
	value = await Promise.resolve('test 2B');
	console.log(value);
}

test1();
test2();

test1().then(() => test2());

 */

// p. 174
/*
const asyncReturn = async() => {
	return [1, 2, 3];
}

asyncReturn()
	.then(value => console.log(value));

const asyncException = async () => {
	throw new Error('error');
}
asyncException()
	.catch(err => console.log('error:', err.message));

 */
// p. 175

const awaitReject = async() => {
	await Promise.reject(new Error('error'));
}

awaitReject()
	.catch(err => console.log('error:', err.message));

const readFilesAll = async (filenames: string[]) => {
	return await Promise.all(
		filenames.map(filename => readFilePromise(filename))
	)
};

readFilesAll(['./package.json', './tsconfig.json'])
	.then(([packageJson, tsconfigJson]: string[]) => {
		console.log('<package.json>: ', packageJson);
		console.log('<tsconfig.json>: ', tsconfigJson);
	})
	.catch(err => console.log('error:', err.message));
