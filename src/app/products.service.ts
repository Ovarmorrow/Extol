import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // options = {
  //   headers: new HttpHeaders({
  //       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  //       'Accept-Language': 'en-US,en;q=0.9',
  //       'Cache-Control': 'no-cache',
  //       'Pragma': 'no-cache',
  //       'Upgrade-Insecure-Requests': '1',
  //     })
  //   };
    // private url = 'https://jsonplaceholder.typicode.com/todos/1';
    //extract API key create | create config folder for API etc
    // https://jsonplaceholder.typicode.com/todos/1
    private url = 'http://localhost:3000/api';
    // private url = 'https://api.shop.com/stores/v1/products/874694776?allperms=false&apikey=l7xx55b86124178d433b9fd9d040f0f029d4';
    // private url = 'https://api.shop.com/AffiliatePublisherNetwork/v1/products?publisherID=TEST&locale=en_US&perPage=15&apikey=l7xx723b03d255bc4c388108884350887d50';

    constructor(private http: HttpClient) {}

    getProducts() {
      return this.http.get(this.url)
    }

    // createPost(post) {
    //   return this.http.post(this.url, JSON.stringify(post));
    // }

    // updatePost(post) {
    //   return this.http.patch(this.url + '/' + post.id, JSON.stringify({
    //     isRead: true
    //   }));
    // };

    // deletePost(id) {
    //   return this.http.delete(this.url + '/' + id);
    // }
  }
