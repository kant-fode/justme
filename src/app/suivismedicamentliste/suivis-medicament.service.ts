import { Injectable } from '@angular/core';
import { SuiviMedicament } from './suivi-medicament.model';

@Injectable({
  providedIn: 'root'
})
export class SuivisMedicamentService {

  private suivisMedicament: SuiviMedicament[] = [];

  constructor() {
    // Initialisez les données de suivi de médicaments si nécessaire
  }

  // Méthode pour récupérer tous les suivis de médicaments
  getSuivisMedicament(): SuiviMedicament[] {
    return this.suivisMedicament;
  }

  // Méthode pour ajouter un suivi de médicament
  ajouterSuiviMedicament(suivi: SuiviMedicament): void {
    this.suivisMedicament.push(suivi);
  }

  // Méthode pour mettre à jour un suivi de médicament
  mettreAJourSuiviMedicament(suivi: SuiviMedicament): void {
    // Recherchez le suivi par son identifiant et mettez à jour les données
    const index = this.suivisMedicament.findIndex(item => item.id === suivi.id);
    if (index !== -1) {
      this.suivisMedicament[index] = suivi;
    }
  }

  // Méthode pour supprimer un suivi de médicament
  supprimerSuiviMedicament(id: number): void {
    // Recherchez le suivi par son identifiant et supprimez-le du tableau
    const index = this.suivisMedicament.findIndex(item => item.id === id);
    if (index !== -1) {
      this.suivisMedicament.splice(index, 1);
    }
  }

  // Autres méthodes pour gérer les opérations de suivi de médicaments
}
