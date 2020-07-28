import axios from 'axios';

const adapter = axios.create({ baseURL: "https://my-project-1558962271623.firebaseio.com/" });

export default adapter;