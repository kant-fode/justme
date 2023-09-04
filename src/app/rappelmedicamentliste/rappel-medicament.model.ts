// Dans le fichier rappel-medicament.model.ts
export class RappelMedicament {
    id: number;
    datedebut: Date;
    datefin: Date;
    medicament: string;
    heuredesignale: string;
  
    constructor(id: number, datedebut: Date, datefin: Date, medicament: string, heuredesignale: string) {
      this.id = id;
      this.datedebut = datedebut;
      this.datefin = datefin;
      this.medicament = medicament;
      this.heuredesignale = heuredesignale;
    }
  }
  