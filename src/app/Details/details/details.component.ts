import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProductsService
} from 'src/app/products.service';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data: any;
  stripDesc: string;
  urlParam: any;

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.urlParam = this.route.snapshot.paramMap.get('prodId');
    console.log(this.urlParam);
    // this.route.paramMap
    // .subscribe(params => {
    //   this.urlParam = params.prodId;
    //   console.log(params);
    // })
    this.service.getDetails(this.urlParam)
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


//data.products[0].prodId