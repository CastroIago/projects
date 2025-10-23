import { Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonTypesComponent } from './pages/pokemon-types/pokemon-types.component';
export const routes: Routes = [
    { path: '', component: PokemonsComponent },

    // segunda rota
    { path: 'pokemon/:name', component: PokemonDetailComponent },


    // terceira rota
    {path: 'tipos', component: PokemonTypesComponent},
];