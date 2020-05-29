import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { LoadExistingParticipantsComponent } from './add-participants/load-existing-participants/load-existing-participants.component';
import { AddMultipleParticipantsComponent } from './add-participants/add-multiple-participants/add-multiple-participants.component';
import { AddSingleParticipantComponent } from './add-participants/add-single-participant/add-single-participant.component';

export const PARTICIPANT_ROUTES = [
  {path: '', component: ListParticipantsComponent},
  {path: 'load-existing', component: LoadExistingParticipantsComponent},
  {path: 'add-single', component: AddSingleParticipantComponent},
  {path: 'add-multiple', component: AddMultipleParticipantsComponent},
];

