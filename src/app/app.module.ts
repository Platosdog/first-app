import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    RouterModule,
    RouterLink,
    AppComponent,
    DetailsComponent,
    RouterOutlet
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
