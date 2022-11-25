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
  .then(({hits}) => {
    this.incrementPage();
    return hits;
    // return data.totalHits;
  });
}

incrementPage() {
this.page += 1;
}

resetPage() {
this.page = 1;
refs.loadMoreBtn.classList.toggle("hidden");
}

get query() {
        return this.searchQuery;
      }
    
set query(newQuery) {
        this.searchQuery = newQuery;
      }
}




// const galleryContainer = document.querySelector('.gallery');
// const galleryMarkup = createGalleryRef(galleryItems)

// galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);


// function createGalleryRef(galleryItems) {
//     return galleryItems.map(({preview, original, description}) => {
//         return `<a class="gallery__item" href="${original}">
//         <img 
//         class="gallery__image" 
//         src="${preview}" 
//         alt="${description}" />
//       </a>`

// })
// .join('');
// }


// function markupCreate(photos) {
//   return refs.gallery.insertAdjacentHTML(
//     'beforeend',
//     photos.hits
//       .map(
//         ({
//           webformatURL,
//           largeImageURL,
//           tags,
//           likes,
//           views,
//           comments,
//           downloads,
//         }) => `<div class="photo-card">
// <a class="photo-card__link" href="${largeImageURL}"><img class="photo-card__image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
//   <div class="info">
//   <p class="info-item">
//   <b>Likes: </b>${likes}
//   </p>
//   <p class="info-item">
//   <b>Views: </b>${views}
//   </p>
//   <p class="info-item">
//   <b>Comments: </b>${comments}
//   </p>
//   <p class="info-item">
//   <b>Downloads: </b>${downloads}
//   </p>
//   </div>
//   </div>`
//       )
//       .join('')
//   