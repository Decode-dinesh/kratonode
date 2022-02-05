import fetch from 'node-fetch';

const response = await fetch('https://jsonplaceholder.typicode.com/comments');
const data = await response.json();

console.log(data);