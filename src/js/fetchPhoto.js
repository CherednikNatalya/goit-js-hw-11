export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

 fetchPhoto() {
    console.log(this);
const API_KEY = '31541189-0a437f1c4a0bdb60103b05fd6'
const BASE_URL = 'https://pixabay.com/api';
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q${this.searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=${this.page}`
  )
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    this.incrementPage() 

    return data.photo
  });
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
        this.searchQuery = newQuery;
      }
}







