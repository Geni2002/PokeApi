import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-Pokemonlist',
  templateUrl: './Pokemonlist.component.html',
  styleUrls: ['./Pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public page: number = 0;
  public search: string = '';

  constructor( private PokemonService: PokemonService ) { }

  ngOnInit(): void {

    this.PokemonService.getAllPokemons()
      .subscribe( Pokemons => {
        this.pokemons = Pokemons;
      });

  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= 5;
  }

  onSearchPokemon( search: string ) {
    this.page = 0;
    this.search = search;
  }

}
