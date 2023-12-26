import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Games } from '../interfaces/games';


@Injectable()
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }

  getGames() {
    return this.http.get('/api/games');
  }

  getGame(id: number) {
    return this.http.get(`/api/game?id=${id}`);
  }
}
