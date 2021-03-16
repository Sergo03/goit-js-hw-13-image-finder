import renderImages from './render-image';



export default class ImgApi{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
  }

    async fetchImg() {
        const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
        const apiKey = '20704457-b02886aee8bbd15c3245ed4eb';

        const response = await fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`);
        const images = response.json();
        return images.then(renderImages,this.page+=1);
  }
    resetPage() {
       this.page = 1;
   }
    get query(){
        return this.searchQuery;
    }
    set query(newQuery) {
         this.searchQuery = newQuery;
    }
  
         
}





// export default {
//     nameImg: '',
    
//     async getImages(nameImg) {
//         const response = await fetch(`${BASE_URL}&q=${nameImg}&page=${page}&per_page=12&key=${apiKey}`);
//         const images = response.json();
//         return images
//     },
    
//     async loadMore(nameImg){
//           const response = await fetch(`${BASE_URL}&q=${nameImg}&page=${page}&per_page=12&key=${apiKey}`);
//         const images = response.json();
//         return images 
//     }
    
// }




//  export default async function getImages(nameImg) {
//     const response = await fetch(`${BASE_URL}&q=${nameImg}&page=${page}&per_page=12&key=${apiKey}`);
//     const images = response.json();
//     return images;
    
// }



// async function onClick() {
//     page += 1;
//  const response = await fetch(`${BASE_URL}&q=${nameImg}&page=${page}&per_page=12&key=${apiKey}`);
//     const images = response.json();
//     return images;
 
// }




















// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ