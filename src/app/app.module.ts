import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PlayerPage } from '../pages/player/player';
import { PlayersPage } from '../pages/players/players';
import { PositionsPage } from '../pages/positions/positions';
import { TabsPage } from '../pages/tabs/tabs';
import { TeamPage } from '../pages/team/team';
import { PlayerService } from '../services/players.service';


@NgModule({
  declarations: [
    MyApp,
    PlayerPage,
    PlayersPage,
    PositionsPage,
    TabsPage,
    TeamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayerPage,
    PlayersPage,
    PositionsPage,
    TabsPage,
    TeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerService
  ]
})
export class AppModule {}
