import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {HomeComponent} from './home/home.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list/customer', component: ListCustomerComponent},
  {path: 'list/facility', component: ListFacilityComponent},
  {path: 'list/contract', component: ListContractComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
