import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberFirst: number;
  numberTwo: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }
  resultNumber(open: string): number {
    switch (open) {
      case '+':
        return this.result = this.numberFirst + this.numberTwo;
        break;
      case '-':
        return this.result = this.numberFirst - this.numberTwo;
        break;
      case '*':
        return this.result = this.numberFirst * this.numberTwo;
        break;

      case '/':
        return this.result = this.numberFirst / this.numberTwo;
        break;
    }
  }
}
