type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function (a: string, b: number): void {}
let g: stringNumberFunc = function (c: string, d: number): void {}
let h: stringNumberFunc = function(a1: number, b1: string): void{};
h(3, 'dragon');
console.log('test2');

type Test = (a: string, b:number) => void // (type키워드 + 함수 시그니처)
let a: Test = function (a:string, b:number) :void {}

const makePerson = (a)