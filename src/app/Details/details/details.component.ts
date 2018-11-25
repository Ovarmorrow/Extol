import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data: any;
  stripDesc: string;

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.getDetails()
      .subscribe(response => {
        this.data = response;
        console.log("get Details Response", response);
        this.stripDesc = this.stripHTML(this.data.products[0].product.description);
      })
  }

  stripHTML(myString) {
    return myString.replace(/<(?:.|\n)*?>/gm, '');
  }

}
