import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExistingAddComponent } from './existing-add/existing-add.component';
import { MultipleAddComponent } from './multiple-add/multiple-add.component';
import { SingleAddComponent } from './single-add/single-add.component';

const routes: Routes = [
  { path: 'existing-add', component: ExistingAddComponent },
  { path: 'multiple-add', component: MultipleAddComponent },
  { path: 'single-add', component: SingleAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddParticipantsRoutingModule {}

