import { Component } from '@angular/core';
import { Player } from '../../data/player.interface';
import { NavController } from 'ionic-angular';
import players from '../../data/players';
import { PlayersPage } from '../players/players';

@Component({
  selector: 'page-positions',
  templateUrl: 'positions.html',
})
export class PositionsPage {
  playersCollection: {category: string, players: Player[], icon: string}[];
 
  constructor(private navCtrl: NavController){

  }

  ngOnInit(){
    this.playersCollection = players;
  }

  openPage(collection: {category: string, players: Player[], icon: string}){
    this.navCtrl.push(PlayersPage, collection);
  }

}
