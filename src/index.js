
import NewsApiService  from './js/fetchPhoto'
import { refs } from './js/refs'


refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onloadMore)

const newsApiService = new NewsApiService();

function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value.trim();
  newsApiService.resetPage()
  newsApiService.fetchPhoto().then(photo => console.log(photo))
}

function onloadMore (e) {
  newsApiService.fetchPhoto().then(photo => console.log(photo));
}

