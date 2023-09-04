import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilpageComponent } from './accueilpage/accueilpage.component';
import { ListemedicamentpageComponent } from './listemedicamentpage/listemedicamentpage.component';
import { RappelmedicamentpageComponent } from './rappelmedicamentpage/rappelmedicamentpage.component';
import { SuivismedicamentpageComponent } from './suivismedicamentpage/suivismedicamentpage.component';


const routes: Routes =  [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirection par défaut vers AccueilPageComponent
  { path: 'accueil', component: AccueilpageComponent }, // Route vers AccueilPageComponent
  { path: 'listemedicament', component: ListemedicamentpageComponent }, // Route vers ListeMedicamentPageComponent
  { path: 'rappelmedicament', component: RappelmedicamentpageComponent }, // Route vers RappelMedicamentPageComponent
  { path: 'suivimedicament', component: SuivismedicamentpageComponent }, // Route vers SuiviMedicamentPageComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  accueilClique() {
    // Effectuez l'action souhaitée ici
    console.log('Bouton Accueil ');
  }

  listemedicamentClique() {
    // Effectuez l'action souhaitée ici
    console.log('Bouton Liste Médicaments ');
  }

  rappelmedicament() {
    // Effectuez l'action souhaitée ici
    console.log('Bouton Rappel Médicaments');
  }

  suivimedicament() {
    // Effectuez l'action souhaitée ici
    console.log('Bouton Suivi Médicaments');
  }
}
 
