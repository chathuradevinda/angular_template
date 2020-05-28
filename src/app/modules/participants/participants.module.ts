import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddParticipantsModule } from './add-participants/add-participants.module';
import { EditParticipantsComponent } from './edit-participants/edit-participants.component';

@NgModule({
  declarations: [
    AddParticipantsModule,
    EditParticipantsComponent
  ],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class ParticipantsModule {}
