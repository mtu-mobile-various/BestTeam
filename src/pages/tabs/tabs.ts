import { Component } from '@angular/core';
import { PositionsPage } from '../positions/positions';
import { TeamPage } from '../team/team';

@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
    <ion-tab [root] = "positionsPage" tabTitle = "Players" tabIcon = "person-add"></ion-tab>
    <ion-tab [root] = "teamPage" tabTitle = "MyTeam" tabIcon = "people"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  positionsPage = PositionsPage;
  teamPage = TeamPage;
  
}
