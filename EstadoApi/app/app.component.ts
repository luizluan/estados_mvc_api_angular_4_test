import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    template: '<div *ngFor="let estado of estados"> {{ estado.Nome }} </div>'
})




export class AppComponent  implements OnInit {


    estados = new Array();
    ngOnInit(): void {
        this.http.get('/estado/getEstados').subscribe(response => {
            this.estados = (response.json()).Estados;
        });
    }
      



    constructor(private http: Http) {
    }






}
