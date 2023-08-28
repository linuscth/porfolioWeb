import axios from 'axios';

const search = (query) =>
    axios.get(`https://api.github.com/repos/linuscth/${query}`);

export default search;