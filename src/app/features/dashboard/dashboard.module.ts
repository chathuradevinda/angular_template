import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [NotificationsComponent, StatisticsComponent, TimelineComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
