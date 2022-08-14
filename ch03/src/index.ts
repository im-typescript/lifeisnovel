class Person1 {
	name: string
	age?: number
}

class Person2 {
	constructor(public name: string, public age?: number) {}
}
let jack2 : Person2 = new Person2('Jack', 31)
console.log(jack2)

class Person3 {
	name: string
	age?: number
	constructor(name: string, age?: number) {
		this.name = name; this.age = age
	}
}
let jack3 : Person3 = new Person3('Jack', 33)
console.log(jack3)

interface IPerson4 {
	name: string
	age?: number
}

class Person4 implements IPerson4 {
	constructor(public name: string, public age?: number) {
	}
}

let jack4: IPerson4 = new Person4('Amy', 22)
console.log(jack4);

abstract class AbstractPerson5 {
	abstract name: string
	constructor(public age?: number) {
	}
}

class Person5 extends AbstractPerson5 {
	constructor(public name: string, age?: number) {
		super(age);
	}
}
let jack5: Person5 = new Person5('Jang', 30)
console.log(jack5)

let address: any = {
	country: 'Korea',
	city: 'Seoul',
	address1: 'Gangnam-gu',
	address2: '연남동',
	address3: '789'
}
const {country, city, ...detail} = address
console.log(detail)
console.log(detail.address2)

interface INameable {
	name: string
}

let obj: object = {name: 'Jong'}
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2)