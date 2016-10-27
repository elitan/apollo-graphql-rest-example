import axios from 'axios';

const API = {
	getUser(id = 1) {
		return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				console.log('request to users/' + id)
				return res.data; //{ id: 1337, name: 'johan', username: 'elitan'};
			});
	}
}

export { API };
