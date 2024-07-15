import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
// import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        AboutComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    exports:[]
})
export class AppModule { }
