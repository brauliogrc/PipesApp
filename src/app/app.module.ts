import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

/**
 * Configuracion de LOCALE_ID
 * Esto afecta a los siguentes pipes:
 * DatePipe
 * CurrencyPipe
 * DecimalPipe
 * PercentPipe
 * 
 * es-US es el valor por defecto
 * 
 * https://v17.angular.io/guide/i18n-common-format-data-locale
 */

import localeEsMX from '@angular/common/locales/es-MX'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEsMX); // Definicion del LOCALE_ID que afecta a los pipes
registerLocaleData(localeFrCA);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-MX' // Definimos de manera global para toda la app el LOCALE_ID para no hacerlo en cada pipe de forma individual
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
