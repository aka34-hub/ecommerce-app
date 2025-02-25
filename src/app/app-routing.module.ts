import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { MensClothingComponent } from './mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'electronics', component:ElectronicsComponent},
  {path: 'home/electronics', component:ElectronicsComponent},
  {path: 'jewelery', component:JeweleryComponent},
  {path: 'home/jewelery', component:JeweleryComponent},
  {path: 'mensclothing', component:MensClothingComponent},
  {path: 'home/mensclothing', component:MensClothingComponent},
  {path: 'womensclothing', component:WomensClothingComponent},
  {path: 'home/womensclothing', component:WomensClothingComponent},
  {path: 'detils/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }