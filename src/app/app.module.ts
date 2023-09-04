import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListemedicamentpageComponent } from './listemedicamentpage/listemedicamentpage.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { RappelmedicamentpageComponent } from './rappelmedicamentpage/rappelmedicamentpage.component';
import { RappelmedicamentlisteComponent } from './rappelmedicamentliste/rappelmedicamentliste.component';
import { SuivismedicamentlisteComponent } from './suivismedicamentliste/suivismedicamentliste.component';
import { SuivismedicamentpageComponent } from './suivismedicamentpage/suivismedicamentpage.component';
import { HeaderstatiqueComponent } from './headerstatique/headerstatique.component';
import { AccueilpageComponent } from './accueilpage/accueilpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListemedicamentpageComponent,
    MedicamentComponent,
    RappelmedicamentpageComponent,
    RappelmedicamentlisteComponent,
    SuivismedicamentlisteComponent,
    SuivismedicamentpageComponent,
    HeaderstatiqueComponent,
    AccueilpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
