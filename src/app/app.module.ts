import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms para el ngModel
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
