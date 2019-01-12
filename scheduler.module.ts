import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SchedulerComponent } from './scheduler.component';
import { FormatMomentPipe } from './scheduler.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SchedulerComponent, FormatMomentPipe],
  exports: [SchedulerComponent]
})
export class SchedulerModule { }
