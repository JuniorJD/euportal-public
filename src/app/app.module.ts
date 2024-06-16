import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
