export class SuiviMedicament {
    id: number;
    nom: string;
    dosage: string;
    frequence: string;
    prochainePrise: Date;
  
    constructor(id: number, nom: string, dosage: string, frequence: string, prochainePrise: Date) {
      this.id = id;
      this.nom = nom;
      this.dosage = dosage;
      this.frequence = frequence;
      this.prochainePrise = prochainePrise;
    }
  }