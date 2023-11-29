import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from './housing-location/housing-location.component';
//import { HousingLocationComponent } from './housing-location/housing-location.component';


@NgModule({
    declarations: [
        AppComponent,
        //HousingLocationComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        HousingLocationComponent,
        HomeComponent
    ]
})
export class AppModule { }
