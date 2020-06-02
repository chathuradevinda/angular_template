import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';

import { AddSingleParticipantComponent } from './add-participants/add-single-participant/add-single-participant.component';
import { AddMultipleParticipantsComponent } from './add-participants/add-multiple-participants/add-multiple-participants.component';
import { LoadExistingParticipantsComponent } from './add-participants/load-existing-participants/load-existing-participants.component';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { PARTICIPANT_ROUTES } from './participants.routes';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddSingleParticipantComponent,
    AddMultipleParticipantsComponent,
    LoadExistingParticipantsComponent,
    ListParticipantsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PARTICIPANT_ROUTES),
    InputTextModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    SharedModule
  ],
  exports: [AddSingleParticipantComponent],
  providers: [],
})
export class ParticipantsModule {}
