var Users = (function() {
	var users = [];

	var isUser = function(newUser) {
		return newUser instanceof User; 
	};

	var exists = function(newUser) {
		return users.some(function(user) {
			return user.get('email') === newUser.get('email') ||
				user.get('username') === newUser.get('username');
		});
	};

	var subtotal = function() {
		return this.messageCounter();
	};

	var total = function() {
		return users.reduce(function(total, user) {
			return total + subtotal.call(user);
		}, 0);
	};

	return {
		add: function(newUser) {
			if (isUser(newUser) && !exists(newUser)) {
				users.push(newUser);
			}
		},
		count: function() {
			return users.length;
		},
		property: function(property) {
			return users.map(function(user) {
				return user.get(property);
			});
		},
		totalMessages: function() {
			return total();
		}
	};
}());
