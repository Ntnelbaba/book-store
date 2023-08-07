import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feed',
  },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: 'feed',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
