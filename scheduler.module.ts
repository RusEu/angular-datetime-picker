import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SchedulerComponent } from './scheduler.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SchedulerComponent],
  exports: [SchedulerComponent]
})
export class SchedulerModule { }
