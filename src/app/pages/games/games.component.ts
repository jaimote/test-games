import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Games } from '../../interfaces/games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any = {};

  filterNombre: string = '';
  filterGenre: string = '';
  filterPlatform: string = '';

  categoriaGenre: any = [];
  categoriaPlatform: any = [];


  constructor(
    private service: GamesService,
  ) { }

  ngOnInit(): void {
    var gamesObservable = this.service.getGames();
    gamesObservable.subscribe(data => {
      this.games = data;
      this.categoriaGenre = this.groupBy(this.games, 'genre');
      this.categoriaPlatform = this.groupBy(this.games, 'platform');
    }, err => {
      console.log(err);
    });
  }

  groupBy(collection: Games[], property: string) {
    var i:number = 0, result: any = [], resultFinal: any = [];

    for (; i < collection.length; i++) {
      if(property == 'genre'){
        result.push(collection[i].genre.trim());
      }
      if(property == 'platform'){
        result.push(collection[i].platform.trim());
      }
    }
    let resultLimpio = Array.from(new Set(result));
    resultLimpio.sort();
    i = 0;
    for (; i < resultLimpio.length; i++) {
      resultFinal.push({name: resultLimpio[i]});
    }
    return resultFinal;
  }

}

export class Filtros {
    descripcion: string = '';
    genre: string = '';
    platform: string = '';
}
