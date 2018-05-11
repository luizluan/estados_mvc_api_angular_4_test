import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
        selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    estados = new Array();
    term = '';

    ngOnInit(): void {
        this.http.get('/estado/getEstados').subscribe(response => {
            this.estados = (response.json()).Estados;
        });
    }
      
    constructor(private http: Http) {
    }
}
