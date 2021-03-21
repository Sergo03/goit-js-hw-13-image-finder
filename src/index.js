import './styles.css';
import ImgApi from './apiService';


var debounce = require('lodash.debounce');

const searchRef = document.querySelector('#search-form');
const btnRef = document.querySelector('.load-more');
const listImgRef = document.querySelector('.gallery');

const imgApi = new ImgApi();

searchRef.addEventListener('input', debounce(onSearch, 500));
btnRef.addEventListener('click', onClick);
btnRef.addEventListener('click', scroll);


function onSearch(event) {
    listImgRef.innerHTML = '';
    imgApi.query = event.target.value;
    imgApi.resetPage();
    imgApi.fetchImg(imgApi.query);
    
};



function onClick() {
    imgApi.fetchImg(imgApi.query);
};
    

function scroll() {
    const totalScroll=listImgRef.clientHeight+80
    setTimeout(() => {
        window.scrollTo({
        top: totalScroll,
        behavior: 'smooth'
    })
    },800) 
};