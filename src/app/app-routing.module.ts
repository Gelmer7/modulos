import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProgresoComponent } from './components/progreso/progreso.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'progreso', component:ProgresoComponent},
  { path: '', pathMatch:'full', redirectTo:'home'},
  { path: '**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
