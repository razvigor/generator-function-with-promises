function* fetchUsers() {
	yield fetch('https://jsonplaceholder.typicode.com/users')
		.then((resp) => resp.json())
		.then((users) => {
			return users;
		});
}

const usersIt = fetchUsers();
usersIt.next().value.then((resp) => console.log(resp));

async function* fetchPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	yield await response.json();
}

const it = fetchPosts();

it.next().then(({ value, done }) => {
	console.log(value);
});
