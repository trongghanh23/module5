import { Injectable } from '@angular/core';

function differenceInYears(now: Date, diff: Date) {

}

function addYears(diff: Date, years: void) {
  return undefined;
}

function differenceInMonths(now: Date, diff: string | number | Date) {

}

function addMonths(diff: string | number | Date, months: void) {
  return undefined;
}

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now, diff);
    // @ts-ignore
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }

    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    // @ts-ignore
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    function differenceInDays(now: Date, diff: string | number | Date) {

    }

    const days = differenceInDays(now, diff);
    // @ts-ignore
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }
}
