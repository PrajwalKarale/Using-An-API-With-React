import axios from "axios";

const url = 'https://api.unsplash.com/search/photos';
const searchImages = async (term) => {
    const response = await axios.get(url, {
        headers: {
            Authorization: 'Client-ID IvTkcpK9YF1KVQmpbMpbBpWf9yC3CJfEhWw5dTeO_64'
        },
        params: {
            query: term
        }
    });
    console.log(response);
    return response.data.results;
};

export default searchImages;