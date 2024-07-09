import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'braulio';
  public nameUper: string = 'BRAULIO';
  public fullName: string = 'BrAULIO GarCiA';

  public customDate: Date = new Date();

}
