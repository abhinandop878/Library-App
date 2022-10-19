import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { ViewBooksComponent } from './view-books/view-books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddBooksComponent,
    ViewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
