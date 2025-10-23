import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {

  // começa como null
  pokemon: any = null;

  //  ler a URL / ler service
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    
    const pokemonName = this.route.snapshot.paramMap.get('name');

   
    if (pokemonName) {
      this.pokemonService.getPokemonDetail(pokemonName)
        .subscribe( (response) => {
          
          this.pokemon = response;
        });
    }
  }
}