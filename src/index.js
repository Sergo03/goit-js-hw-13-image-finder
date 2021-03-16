import './styles.css';
import ImgApi from './apiService';
var debounce = require('lodash.debounce');

const searchRef = document.querySelector('#search-form');
const btnRef = document.querySelector('.load-more');
const imgApi = new ImgApi();

searchRef.addEventListener('input', debounce(onSearch, 500));
btnRef.addEventListener('click', onClick);


function onSearch(event) {
    imgApi.query = event.target.value;
    imgApi.resetPage();
    imgApi.fetchImg(imgApi.query);
    
}

function onClick() {
    imgApi.fetchImg(imgApi.query);
    
     }
    


function scroll() {
    const heightScreen = document.documentElement.clientHeight;
    const currentHeight = window.document.scrollingElement.offsetHeight;
    const res = currentHeight + heightScreen;
    window.scrollTo({
        top: res,
        behavior: 'smooth'
    })
}