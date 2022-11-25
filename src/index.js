
import NewsApiService  from './js/fetchPhoto'
import { refs } from './js/refs'
import SimpleLightbox from "simplelightbox";
import Notiflix from 'notiflix';


refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onloadMore)


const newsApiService = new NewsApiService();

function onSearch(e) {
  e.preventDefault();
  
  clearContainer()
  newsApiService.query = e.currentTarget.elements.query.value.trim();
 
  if (newsApiService.query === '') {
    return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  } else {
    Notiflix.Notify.success(`Hooray! We found totalHits images.`);
  }

  newsApiService.resetPage()
  newsApiService.fetchPhoto().then(markupCreate);
  refs.loadMoreBtn.classList.toggle("hidden");
}

function onloadMore (e) {
  newsApiService.fetchPhoto().then(markupCreate);
  refs.loadMoreBtn.classList.toggle("hidden");
}

function markupCreate(hits) {
    return refs.gallery.insertAdjacentHTML(
      'beforeend',
      hits.map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `<div class="photo-card">
<a class="photo-card__link" href="${largeImageURL}">
<img class="photo-card__image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
</a>
  <div class="info">
  <p class="info-item">
  <b>Likes: </b>${likes}
  </p>
  <p class="info-item">
  <b>Views: </b>${views}
  </p>
  <p class="info-item">
  <b>Comments: </b>${comments}
  </p>
  <p class="info-item">
  <b>Downloads: </b>${downloads}
  </p>
  </div>
  </div>`
      )
      .join('')
      );
      }
      

function clearContainer() {
  refs.gallery.innerHTML = '';
}



const lightbox = new SimpleLightbox('.gallery a', {
	captionDelay: 250,
    captionsData:'alt',
});




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



