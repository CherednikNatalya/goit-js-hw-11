
import axios from "axios";

export class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalPages = 0
    this.perPage = 40;
}

async getPhotos() {

axios.defaults.baseURL = 'https://pixabay.com/api';
const searchParams = new URLSearchParams({
  key: "30455130-0aca0478341a7e36a6d0ca3c2",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  q: this.searchQuery,
  page: this.page,
  per_page: this.perPage
  
})
    const urlAXIOS = `&q=${this.query}&per_page=${this.perPage}&page=${this.page}`;
    const { data } = await axios.get(urlAXIOS, this.searchParams);
    return data;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
}
set query(newQuery) {
    return this.searchQuery = newQuery;
}
  calculateTotalPages(totalHits) {
    this.totalPages = Math.ceil(total / this.perPage);
  }

  get isShowLoadMore() {
    return this.page < this.totalPages;
  }
}







