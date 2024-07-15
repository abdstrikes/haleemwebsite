import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path : 'home',
    // loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
    component: HomeComponent
  },
  {
    path : 'menu',
    // loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
    component: MenuComponent
  },
  {
    path : 'about',
    // loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
    component: AboutComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
