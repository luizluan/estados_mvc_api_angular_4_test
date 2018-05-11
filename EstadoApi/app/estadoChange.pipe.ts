import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'estadoChange'
})
export class estadoChangePipe implements PipeTransform {
    transform(items: any[], term: string): any[] {
        if (!items) return [];
        if (!term) return items;
        term = term.toLowerCase();
        return items.filter(it => {
            return it.Sigla.toUpperCase().includes(term.toUpperCase()) || it.Nome.toLowerCase().includes(term);
        });
    }

}