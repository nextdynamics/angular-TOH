import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Luftmann Senior' },
      { id: 12, name: 'Medizino' },
      { id: 13, name: 'Superfrau' },
      { id: 14, name: 'Cholesterol' },
      { id: 15, name: 'Kämpfi' },
      { id: 16, name: 'Bomben-Bub' },
      { id: 17, name: 'Karsten' },
      { id: 18, name: 'Dr. Dog-Thor' },
      { id: 19, name: 'Pobrand II.' },
      { id: 20, name: 'Zerstörmacher' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
