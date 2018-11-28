import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Observable,
  of
} from 'rxjs';
import {
  map,
  catchError,
  tap
} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  // private url = 'https://jsonplaceholder.typicode.com/todos/1';
  //extract API key create | create config folder for API etc
  // https://jsonplaceholder.typicode.com/todos/1
  // private url = 'http://localhost:3000/api';
  // private url = 'https://api2.shop.com/AffiliatePublisherNetwork/v2/products?publisherId=1&locale=en_US&api_key =b836d48efc3b4f15b97a8532615c1ad4';
  
  private url = 'https://api2.shop.com/search/v1/products?locale=en_US&api_key=b836d48efc3b4f15b97a8532615c1ad4&perPage=15';
  private detailsUrl = 'https://api2.shop.com/product-detail-service/v1/ProdId/';

  // private url = 'https://api.shop.com/stores/v1/products/874694776?allperms=false&apikey=l7xx55b86124178d433b9fd9d040f0f029d4';
  // private url = 'https://api.shop.com/AffiliatePublisherNetwork/v1/products?publisherID=TEST&locale=en_US&perPage=15&apikey=l7xx723b03d255bc4c388108884350887d50';
  // restItems: any;
  // restItemsUrl = 'https://api2.shop.com/AffiliatePublisherNetwork/v2/products';




  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.url)
  }

  searchProducts(searchInput) {
    return this.http.get(this.url + "&term=" + searchInput); 
  }

  getDetails(prodId) {
    return this.http.get(this.detailsUrl + prodId);
  }
}
