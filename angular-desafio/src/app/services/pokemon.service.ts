import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PokemonItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // PokéAPI
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=200';

  // construtor 
  constructor(private http: HttpClient) { }

 // Traz a lista API
  getPokemons(): Observable<PokemonListResponse> {
    
    
    return this.http.get<PokemonListResponse>(this.apiUrl);
  }
}