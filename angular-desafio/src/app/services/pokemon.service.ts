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
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  // construtor 
  constructor(private http: HttpClient) { }

 // Traz a lista API
  getPokemons(): Observable<PokemonListResponse> {
    
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=200`);
  }
// Traz a segunda chamada API (detalhes)
  getPokemonDetail(name: string): Observable<any> {
    
   
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }
}