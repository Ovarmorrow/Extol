import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ProductsComponent } from './Products/products.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'products', component: ProductsComponent }
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
