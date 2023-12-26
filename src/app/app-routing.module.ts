import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { GamesDetailComponent } from './pages/games-detail/games-detail.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'detail-game/:id', component: GamesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
