import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





@Component({
        selector: 'my-app',
    templateUrl: './app.component.html',
})




export class AppComponent  implements OnInit {


    estados = new Array();
    estadosFiltered = new Array();
    term = '';

    ngOnInit(): void {
        this.http.get('/estado/getEstados').subscribe(response => {
            this.estados = (response.json()).Estados;
            this.estadosFiltered = this.estados;
        });
    }
      
    constructor(private http: Http) {
    }
}
