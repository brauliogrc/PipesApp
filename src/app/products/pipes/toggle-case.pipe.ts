import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
    // PipeTransform es el metodo que se llama para hacer la transformación visual de la data
    
    transform( value: string ): string {
        // Para este caso no haremos uso de argumentos
        return value.toUpperCase();
    }
}