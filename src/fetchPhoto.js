const axios = require('axios');

const BASE_URL = 'https://pixabay.com/api/';
const key = '25379534-0400b4aa9e17455d38435f2b2';

export default class PhotoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }

  async fetchPhoto() {
    const searchParams = new URLSearchParams({
      key: `${key}`,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: this.per_page,
    });
    const url = `${BASE_URL}?${searchParams}`;

    return await axios.get(url);
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  getPage() {
    return this.page;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
