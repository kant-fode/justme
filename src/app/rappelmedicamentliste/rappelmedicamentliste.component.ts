import { Component } from '@angular/core';
import { RappelMedicament } from './rappel-medicament.model';


@Component({
  selector: 'app-rappelmedicamentliste',
  templateUrl: './rappelmedicamentliste.component.html',
  styleUrls: ['./rappelmedicamentliste.component.css']
})
export class RappelmedicamentlisteComponent {
  rappelsMedicament: RappelMedicament[]; // Propriété pour stocker les données de rappels de médicaments

  constructor() {
    // Initialisez cette propriété avec des données de rappels de médicaments
    this.rappelsMedicament = [
      new RappelMedicament(1, new Date('2023-09-10'), new Date('2023-09-15'), 'Médicament A', 'Matin'),
      new RappelMedicament(2, new Date('2023-09-11'), new Date('2023-09-16'), 'Médicament B', 'Soir'),
      // Ajoutez d'autres données de rappels de médicaments au besoin
    ]

}
}
