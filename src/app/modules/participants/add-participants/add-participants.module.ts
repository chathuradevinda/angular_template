import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingAddComponent } from './existing-add/existing-add.component';
import { SingleAddComponent } from './single-add/single-add.component';
import { MultipleAddComponent } from './multiple-add/multiple-add.component';

@NgModule({
  declarations: [
    ExistingAddComponent,
    SingleAddComponent,
    MultipleAddComponent
  ],
  imports: [ CommonModule ],
  exports: [],
  providers: []
})

export class AddParticipantsModule {}
