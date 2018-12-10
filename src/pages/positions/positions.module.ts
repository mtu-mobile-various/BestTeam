import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PositionsPage } from './positions';

@NgModule({
  declarations: [
    PositionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PositionsPage),
  ],
})
export class PositionsPageModule {}
