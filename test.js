// Testing

var anakin = new User({
	name: 'anakin',
	lastname: 'skywalker',
	username: 'anakin3000',
	email: 'anakin@starwars.net'
});

var leia = new User();
leia.set('name', 'leia');
leia.set('lastname', 'solo');
leia.set('username', 'leiaorgana');
leia.set('email', 'leia@starwars.net');

anakin.inspect();
leia.inspect();

console.log('Sent until the moment by anakin: ' + anakin.postMessage('¡Hello leia!'));
console.log('Sent until the moment by leia: ' + leia.postMessage('Hi anakin. I\'m in Polis Massa'));
console.log('Sent until the moment by anakin: ' + anakin.postMessage('Oh really!'));

console.log('Number of messages sent by anakin: ' + anakin.messageCounter());
console.log('Number of messages sent by leia: ' + leia.messageCounter());

Users.add(anakin);
Users.add(leia);
console.log('Number on users: ' + Users.count());
console.log('Properties list:')
console.log(Users.property('username'));
console.log('Messages total: ' + Users.totalMessages());
