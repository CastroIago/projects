import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PokemonService, PokemonItem } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-types',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './pokemon-types.component.html',
  styleUrl: './pokemon-types.component.scss'
})
export class PokemonTypesComponent implements OnInit {

  types: PokemonItem[] = [];

  //  serviço
  constructor(private pokemonService: PokemonService) {}

  
  ngOnInit(): void {
    this.pokemonService.getTypeList() 
      .subscribe( (response) => {
        this.types = response.results;
      });
  }
}