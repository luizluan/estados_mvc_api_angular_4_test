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
            return it.Sigla.toLowerCase().includes(term) || it.Nome.toLowerCase().includes(term);
        });
    }

}