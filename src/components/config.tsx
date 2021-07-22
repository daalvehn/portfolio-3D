import axios from 'axios';
const token: string = '1c807e3b4ade4a5cac830e7a0e81fc34';
axios.defaults.baseURL = 'https://api.sketchfab.com/v3/me';
axios.defaults.headers.common = { Authorization: `Token ${token}` };
export default axios;
