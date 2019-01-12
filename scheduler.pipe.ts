import { Pipe, PipeTransform } from '@angular/core';

import { Moment } from 'moment';


@Pipe({name: 'formatMoment'})
export class FormatMomentPipe implements PipeTransform {
  transform(value: Moment, format: string): string {
    return value.format(format);
  }
}
