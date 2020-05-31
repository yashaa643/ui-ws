import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { IplComponent } from './ipl/ipl.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path:'home',
    component: HomeComponent,
  },

  {
    path:'book',
    component:BookComponent,
   
  },

  {
    path:'author',
    component:AuthorComponent
  },
  {
    path:'ipl',
    loadChildren:()=>import('./ipl/ipl.module').then(m=>m.IplModule)    
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
