import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSingleParticipantComponent } from './add-participants/add-single-participant/add-single-participant.component';
import { AddMultipleParticipantsComponent } from './add-participants/add-multiple-participants/add-multiple-participants.component';
import { LoadExistingParticipantsComponent } from './add-participants/load-existing-participants/load-existing-participants.component';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { RouterModule } from '@angular/router';
import { PARTICIPANT_ROUTES } from './participants.routes';

@NgModule({
  declarations: [
    AddSingleParticipantComponent,
    AddMultipleParticipantsComponent,
    LoadExistingParticipantsComponent,
    ListParticipantsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PARTICIPANT_ROUTES)
  ],
  exports: [],
  providers: [],
})
export class ParticipantsModule {}
