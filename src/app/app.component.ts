import { Component, OnInit } from '@angular/core';
import { Medicament } from './medicament';
import { ListemedicamentpageComponent } from './listemedicamentpage/listemedicamentpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
listemedicament() {
throw new Error('Method not implemented.');
}
suivisMedicament() {
throw new Error('Method not implemented.');
}
rappelmedicament() {
throw new Error('Method not implemented.');
}
accueil() {
throw new Error('Method not implemented.');
} 


  monmedicament!: Medicament;
  ngOnInit(): void {
      
  };
 
}
