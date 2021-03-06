import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { ProductsComponent } from './Products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { DetailsComponent } from './Details/details/details.component';
import { UserpageComponent } from './UserPage/userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    DetailsComponent,
    UserpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
