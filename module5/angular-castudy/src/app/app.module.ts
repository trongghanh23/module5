import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditComponent } from './facility/edit-facility/edit.component';
import { FacilityComponent } from './facility/facility.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ContractComponent } from './contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    EditComponent,
    FacilityComponent,
    CreateFacilityComponent,
    CustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
