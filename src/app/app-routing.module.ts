import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { AddCareerComponent } from './add-career/add-career.component';

const routes: Routes = [
  { path:'', component: CareerComponent},
  { path:'career', component: CareerComponent},
  { path:'addcareer', component: AddCareerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
