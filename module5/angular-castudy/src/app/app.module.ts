import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddContractComponent } from './contract/add-contract/add-contract.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AddContractComponent,
    ListCustomerComponent,
    ListFacilityComponent,
    ListContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
