import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;
  
  @Input()
  numero!: number;

  pegaImagemPokemon(){
    const numeroFormatado = this.leadingZero(this.numero);
    return 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/'+ numeroFormatado + '.png'
  }
  // essa função é necessario para colocar 0 na frente para ficar no formato necessario para imagem!
  leadingZero(str: String | number, size = 3): string{
    let s = String(str);

    while(s.length < (size || 2)){
      s = '0' + s;
    }
    return s
  }
}
