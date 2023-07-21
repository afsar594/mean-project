import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccountserviceService} from './account/accountservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import {AccountModule} from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { AdminserviceService } from './admin/adminservice.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    ArticlesModule,
    StaticpagesModule,
    AccountModule,
    AdminModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    
  ],
  providers: [AccountserviceService,AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }