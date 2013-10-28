var User = function User() {
	var messages = [],
		attrs = arguments[0] || {};

	return  {
		name: attrs.name,
		lastname: attrs.lastname,
		username: attrs.username,
		email: attrs.email,
		postMessage: function() {
			return messages.push(arguments[0]);
		},
		messageCounter: function() {
			return messages.length;
		},
		__proto__: User.prototype
	};
};

User.prototype.get = function() {
	return this[arguments[0]];
};

User.prototype.set = function() {
	this[arguments[0]] = arguments[1];
};

User.prototype.inspect = function() {
	console.log('Properties List:');

	for (property in this) {
		if (typeof this.get(property) !== 'function') {
			console.log(property + ' => ' + this.get(property));
		}
	}
};
