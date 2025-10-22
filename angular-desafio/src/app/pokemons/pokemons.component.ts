import { Component } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [PokemonCardComponent, CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {
 pokemons = ['bulbasaur', 'ivysaur', 'Venosaur']; 
}
