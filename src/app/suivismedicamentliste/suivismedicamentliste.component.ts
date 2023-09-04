import { Component } from '@angular/core';
import { SuiviMedicament } from './suivis-medicament.model'; // Assurez-vous d'importer le modèle SuiviMedicament

@Component({
  selector: 'app-suivismedicamentliste',
  templateUrl: './suivismedicamentliste.component.html',
  styleUrls: ['./suivismedicamentliste.component.css'],
})
export class SuivismedicamentlisteComponent {
  suivisMedicament: SuiviMedicament[]; // Assurez-vous que cette propriété est correctement déclarée

  constructor() {
    // Initialisez cette propriété avec les données de suivi de médicament
    this.suivisMedicament = [
      new SuiviMedicament(1, 'Médicament A', '10 mg', 'Matin et soir', new Date('2023-09-10')),
      new SuiviMedicament(2, 'Médicament B', '5 mg', 'Une fois par jour', new Date('2023-09-11')),
      new SuiviMedicament(3, 'Médicament C', '20 mg', 'Trois fois par jour', new Date('2023-09-12')),
      // Ajoutez d'autres données de suivi de médicament au besoin
    ];
  }
}
