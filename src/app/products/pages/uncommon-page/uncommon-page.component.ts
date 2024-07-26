import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Braulio Garcia';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    'female': 'invitarla'
  };

  public changeClient(): void {
    this.name = 'Jazmin';
    this.gender = 'female';
  }


  // i18nPlural
  public clients: Array<string> = ['Ernesto', 'Enrique', 'Josue', 'Rigoberta', 'Patricia'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  // Key value pipe
  public person = {
    name: 'Natasha',
    age: 24,
    address: 'Calle siempre viva #299'
  }

  // Async pipe
  public myObservableyTimer = interval(2000).pipe(
    tap(value => console.log('value: ', value))
  );
  // Emite valores 0123 basado en la cantidad de tiempo que se defina. En este caso emitira valor cada 2 seg
  
  public promiseValue: Promise<string> = new Promise( (result, reject) => {
    setTimeout( () => {
      result('Tenemos data en la Promise');
      console.log('Tenemos data en la Promise');
    }, 3500 );
  } );

}
