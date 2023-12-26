import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Games } from '../../interfaces/games';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  idGame: any = '';
  game: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: GamesService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idGame = params.get('id');

      var gamesObservable = this.service.getGame(this.idGame);
      gamesObservable.subscribe(data => {
        this.game = data;
        console.log(this.game);
      }, err => {
        console.log(err);
      });
    });
  }
}
