
// import { fetchPhoto } from './js/fetchPhoto'
import { refs } from './js/refs'


refs.form.addEventListener('submit', onSearch)
// refs.loadMoreBtn.addEventListener('click', onSearch)

function onSearch(e) {
  e.preventDefault();

const searchQuery = e.currentTarget.elements.searchQuery.value;
// console.log(searchQuery);
fetchPhoto()
}

  const API_KEY = '31541189-0a437f1c4a0bdb60103b05fd6'
  const BASE_URL = 'https://pixabay.com/api';
  
  function fetchPhoto() {
    return fetch(
      `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=1`
    )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
  
    .catch(err => console.log('Error!'));
    }

  fetchPhoto() 
  

  // if (newsApiService.query === '') {
  //   return alert('Введи что-то нормальное');
  // }

  // loadMoreBtn.show();
  // newsApiService.resetPage();
  // clearArticlesContainer();
  // fetchArticles();




// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
// const BASE_URL = 'https://newsapi.org/v2';
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//     return fetch(url, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         this.incrementPage();
//         return articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
