import axios from 'axios';

const API = {
	getUser(id) {
		return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((res) => {
			console.log('request to users/' + id)
			return res.data;
		});
	},
	getPost(id) {
		return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((res) => {
			console.log('request to posts/' + id)
			return res.data;
		});
	},
	getComment(id) {
		return axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
		.then((res) => {
			console.log('request to comments/' + id)
			return res.data;
		});
	},
	getCommentsFromPost(post_id) {
		return axios.get(`https://jsonplaceholder.typicode.com/comments`)
		.then((res) => {
			console.log('request to comments finding comment from post id /' + post_id)
			return res.data.filter(comment => {
				return comment.postId === post_id;
			});
		});
	}
}

export { API };
