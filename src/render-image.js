import imageCard from './templates/images-card.hbs';

const listImgRef = document.querySelector('.gallery');
const btnRef = document.querySelector('.load-more');

export default function renderImage(images) {
    const markup = imageCard(images.hits);
    listImgRef.insertAdjacentHTML('beforeend', markup)
     btnRef.classList.add('is-visible');
}




