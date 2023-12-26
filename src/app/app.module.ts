import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './pages/games/games.component';

import { GamesService } from './services/games.service';
import { TruncatePipe } from './custom/pipe/truncate.pipe';
import { FilterPipe } from './custom/pipe/filter.pipe';
import { GamesDetailComponent } from './pages/games-detail/games-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    TruncatePipe,
    FilterPipe,
    GamesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
