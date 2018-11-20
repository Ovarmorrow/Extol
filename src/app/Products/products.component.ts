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

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  posts: any[];
  data: any;
  searchInput: any;
  searchValue: string;
  values= '';
  

  constructor(private service: ProductsService) {}

  ngOnInit() {

    this.service.getProducts()
      .subscribe(response => {
        this.data = response;
        console.log("get Products Response", response);
      })

  }

  newSearch() {
    console.log("Data", this.data);
    console.log("Search Value", this.values);
    this.service.searchProducts(this.values)
      .subscribe(response => {
        this.data = response;
        console.log("Search Response", response);
      })
      console.log("Data", this.data);
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
  
}
