import { Component, OnInit,Input } from '@angular/core';
import { Medicament } from '../medicament';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {
  @Input() medicament!: Medicament;
  id!: number;
  nom!: string;
  dosage!: string;
  frequence!: string;
  modifier!: string;
  supprimer!: string;


  ngOnInit(): void {
      this.id = 1;
      this.nom = 'aspirine';
      this.dosage = '100mg';
      this.frequence = 'matin et soir';
  } 
 onAddModifie(){
  this.modifier;

 }
}
