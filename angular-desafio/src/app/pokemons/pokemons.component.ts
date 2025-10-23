import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component'; 

import { PokemonService, PokemonItem } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [
    CommonModule, 
    PokemonCardComponent,
    RouterLink
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit {
  
  //  lista 
  pokemons: PokemonItem[] = [];

  // Serviço
  constructor(private pokemonService: PokemonService) {}

  // chama a API
  ngOnInit(): void {
    
    // Chama o serviço.
    this.pokemonService.getPokemons()
      
     
      .subscribe( (response) => {
        
        
        //    preenche a lista de pokemons
        this.pokemons = response.results;
        
      });
  }
}