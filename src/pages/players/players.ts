import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Player } from '../../data/player.interface';
import { PlayerService } from '../../services/players.service';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {
  playersGroup: {category: string, players: Player[], icon: string}[];

  constructor(private navParams: NavParams, 
    private alertCtrl: AlertController,
    private playerService: PlayerService) {
  }

  ngOnInit(){
    this.playersGroup = this.navParams.data;
  }

  addToTeam(selectedPlayer: Player){
    const alert = this.alertCtrl.create({
      title: 'Add to My Team',
      message: 'Do you want to add this player to your team?',
      buttons:[
        {
          text:'Okay',
          handler: () => {
            this.playerService.addPlayer(selectedPlayer);
          } 
        },
        {
          text: 'Cancel'
        }
      ]
    });

    alert.present();
  }

}
