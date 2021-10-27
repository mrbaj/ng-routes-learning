import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LazyLoadPageComponent } from './lazy-load-page/lazy-load-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : '' , component : Page1Component},
  {path : 'page1' , component : Page1Component},
  {path : 'page2' , component : Page2Component},
  {path : 'page2/:id/:id2' , component : Page2Component}
];

@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    LazyLoadPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
