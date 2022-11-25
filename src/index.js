
import NewsApiService  from './js/fetchPhoto'
import { refs } from './js/refs'


refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onloadMore)

const newsApiService = new NewsApiService();

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();
  newsApiService.resetPage()
  newsApiService.fetchPhoto().then(data => {
      console.log("🚀 ~ data", data);
      return data;
  })


//   newsApiService.query = e.currentTarget.elements.searchQuery.value;
//   newsApiService.resetPage()
//   newsApiService.fetchPhoto().then(data => {
//     console.log("🚀 ~ data", data);
//     return data;
// })
}

function onloadMore (e) {
  newsApiService.fetchPhoto().then(photo => 
    console.log("🚀 ~ photo", photo));
}





// function onSearch(e) {
//   e.preventDefault();
//   newsApiService.query = e.currentTarget.searchQuery.value.trim();
//   newsApiService.resetPage()
//   newsApiService.fetchPhoto().then(data => {
//       console.log("🚀 ~ data", data);
//       return data;
//   })
// }

// function onloadMore (e) {
//   newsApiService.fetchPhoto().then(photo => 
//     console.log("🚀 ~ photo", photo)
//   );
// }