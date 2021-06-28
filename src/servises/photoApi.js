import axios from 'axios';

const API_KEY = '21301662-4ef0ce252e11badb1c1b3b876';
const BASE_URL = 'https://pixabay.com/api/';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchHits };
