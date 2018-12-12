import { Component } from '@angular/core';
import { PlayerService } from '../../services/players.service';
import { Player } from '../../data/player.interface';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  playerList: Player[];

  constructor(private playerService: PlayerService,
              private alertCtrl: AlertController) {
  }

  ionViewWillEnter(){
    this.playerList = this.playerService.getMyTeam();
  }

  onRemoveFromTeam(player){
    this.playerService.removePlayer(player);
    const position = this.playerList.findIndex(
      (person: Player) => {
        return person.Id == player.Id;
    });
    this.playerList.splice(position, 1);
  }

  onClearAll(){
    const alert = this.alertCtrl.create({
      title: "Delete All Players",
      buttons:[
        {
          text:'Okay',
          handler: () => {
            this.playerService.removeTeam();
            this.playerList.splice(0,10);
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
