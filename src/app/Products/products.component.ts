import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProductsService
} from '../products.service';
import {
  products
} from "../products";
import {
  response
} from "../response";
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  posts: any[];
  data: any;
 

  constructor(private service: ProductsService) {

  }

  // when response comes back change to actual response
  ngOnInit() {
    console.log("derp");
    this.service.getProducts()
      .subscribe(response => {
        this.data = response;
        console.log("Response", response);
        // this.posts = response.json();
        
      })
      console.log("derp2");

    // function getProducts() {
    //   new Observable<products[]>

    // }
  }

  // createItem(input: HTMLInputElement) {
  //   let item = { title: input.value };
  //   input.value = '';

  //   this.service.getProducts(item)
  //   .subscribe(response => {
  //     // item['id'] = response.json().id;
  //     this.items.splice(0, 0, item);
  //   })
  // }

  // updatePost(post) {
  //   this.service.updatePost(post)
  //   .subscribe(response => {
  //     // console.log(response.json());
  //   })
  // }

  // deletePost(post) {
  //   this.service.deletePost(post.id)
  //   .subscribe(response => {
  //     let index = this.posts.indexOf(post);
  //     this.posts.splice(index, 1);
  //   })
  // }
}
