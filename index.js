function askForLetter() {
	return prompt("Type a letter: ");
}

function doesUserNameContainLetter(user) {
	return user.name.toUpperCase().indexOf(letter.toUpperCase()) > -1;
}
function getUserName(user) {
	return user.name;
}
function greet(username) {
	console.log(`Hello ${username}`);
}
function askForUserId() {
	return Number(prompt("Enter your user ID"));
}
function showIncompleteTodos(userId) {
	const incompleteTodos = window.todos.filter(function (todo) {
		return todo.userId === userId && !todo.completed;
	});
	const incompleteTodoTitles = incompleteTodos.map(function (todo) {
		return todo.title;
	});
	console.log(`These are your incomplete tasks: `);
	for (const todoTitle of incompleteTodoTitles) {
		console.log(todoTitle);
	}
}
function askForProperty() {
	return prompt("Enter a property :");
}

function showUserProperties(property) {
	for (const user of window.users) {
		console.log(`${user.name} - `, user[property]);
	}
}

const letter = askForLetter();
const selectedUsers = window.users.filter(doesUserNameContainLetter);
const selectedUserNames = selectedUsers.map(getUserName);

let i = 0;
let intervalId = setInterval(function () {
	if (i === selectedUserNames.length) {
		clearInterval(intervalId);
		const selectedUserId = askForUserId();
		showIncompleteTodos(selectedUserId);
		const property = askForProperty();
		showUserProperties(property);
	} else {
		greet(selectedUserNames[i]);
		i++;
	}
}, 2000);
