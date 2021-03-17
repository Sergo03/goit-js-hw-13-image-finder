import imageCard from './templates/images-card.hbs';
const listImgRef = document.querySelector('.gallery');



export default function renderImage(images) {
    const markup = imageCard(images.hits);
    listImgRef.insertAdjacentHTML('beforeend', markup)
  
}

