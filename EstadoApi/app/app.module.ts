import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { estadoChangePipe } from './estadoChange.pipe';

import { AppComponent } from '../app/app.component';



@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, CommonModule],
    declarations: [AppComponent, estadoChangePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
