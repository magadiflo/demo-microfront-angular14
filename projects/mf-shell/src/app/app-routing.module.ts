import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('mfShopping/ProductModule').then(m => m.ProductsModule),
  },
  {
    path: 'payment',
    loadChildren: () => import('mfPayment/PaymentComponent').then(c => c.PaymentComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
