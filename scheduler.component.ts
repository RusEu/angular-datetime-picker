import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Moment } from 'moment';

import * as moment from 'moment';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  @Output() selectedHours: EventEmitter<Moment[]> = new EventEmitter();

  get startDate() {
    return this._date.clone().startOf('week');
  }

  get endDate() {
    return this._date.clone().endOf('week');
  }

  get weekDays() {
    return Array.from(Array(6))
                .map((_, i) => i + 1)
                .map((i) => this.startDate.clone().add(i, 'days'));
  }

  private _date = moment();
  private _selectedHours: Moment[] = [];

  constructor() { }

  ngOnInit() {
  }

  nextWeek() {
    this._date = this._date.add(7, 'days');
  }

  prevWeek() {
    this._date = this._date.subtract(7, 'days');
  }

  getHours(date: Moment) {
    const startDate = date.clone().set({hour: 9, minutes: 0});
    const endDate = date.clone().set({hour: 23, minutes: 59}).endOf('minutes');
    const hours = [];
    while (startDate <= endDate) {
      startDate.add(30, 'minutes');
      hours.push(startDate.clone());
    }
    return hours;
  }

  onClick(hour: Moment): void {
    return this.isSelected(hour)
      ? this.deselectHour(hour)
      : this.selectHour(hour);
  }

  isSelected(hour: Moment) {
    return this._selectedHours.some((date) => date.isSame(hour));
  }

  private selectHour(hour: Moment): void {
    this._selectedHours = [...this._selectedHours, hour];
    this.emitSelected();
  }

  private deselectHour(hour: Moment): void {
    this._selectedHours = this._selectedHours.filter((selectedHour) => !selectedHour.isSame(hour));
    this.emitSelected();
  }

  private emitSelected() {
    this.selectedHours.emit(this._selectedHours);
  }
}
