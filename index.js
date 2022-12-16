const R = require('ramda');

class Person {
	constructor(id, first_name, last_name, address) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.address = address;
	}
}

class Address {
	constructor(city, zip) {
		this.city = city;
		this.zip = zip;
	}
}


let person = new Person(3, 'Дмитро', 'Пєсков', new Address('Москва', '757657654'));


let zipPath = ['address', 'zip'];

let zipLens = R.lens(R.path(zipPath), R.assocPath(zipPath));

console.log(R.view(zipLens, person));
