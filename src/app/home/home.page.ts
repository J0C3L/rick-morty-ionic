import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para el *ngFor
import { RickMortyService } from '../services/rick-morty';


import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
  IonCardTitle, IonCardSubtitle, IonCardContent 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  // 2. Aquí también debemos declararlas
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent
  ],
})
export class HomePage implements OnInit {
  characters: any[] = [];

  constructor(private rmService: RickMortyService) {}

  ngOnInit() {
    this.rmService.getCharacters().subscribe((res: any) => {
      this.characters = res.results;
    });
  }
}