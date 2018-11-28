import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ProductsComponent } from './Products/products.component';
import { DetailsComponent } from './Details/details/details.component';
import { UserpageComponent } from './UserPage/userpage/userpage.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'details/:prodId', component: DetailsComponent },
    { path: 'userpage', component: UserpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

  
// export const router: Routes = [
//     { path: '', component: HomeComponent, pathMatch: 'full' },
//     { path: 'products', component: ProductsComponent }
    
// ];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);
