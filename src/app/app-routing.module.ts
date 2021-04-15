import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RatingComponent } from "./rating/rating.component";
import { DialogEditComponent } from "./rating/dialog-edit/dialog-edit.component";
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'rating', component:RatingComponent},
  {path:'demo', component:DemoComponent},
  {path:'menu', component:DialogEditComponent},
  {path:'**',redirectTo: 'pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
