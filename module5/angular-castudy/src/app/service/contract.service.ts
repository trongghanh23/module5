import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contract: Contract [] = [{
    id: 1,
    starDate: '2020-11-11',
    endDate: '2020-11-12',
    employee: 'nguyễn văn nghĩa',
    customer: 'nguyễn văn hào',
    facility: 'villa',
    deposit: 5000,
    total: 120000
  },
    {
      id: 2,
      starDate: '2021-09-11',
      endDate: '2021-09-12',
      employee: 'nguyễn văn nam',
      customer: 'nguyễn thị tuyết',
      facility: 'home',
      deposit: 5000,
      total: 90000
    }, {
      id: 3,
      starDate: '2020-07-10',
      endDate: '2020-07-12',
      employee: 'nguyễn trong nhân',
      customer: 'nguyễn thị thu',
      facility: 'home',
      deposit: 5000,
      total: 120000
    }, {
      id: 4,
      starDate: '2021-04-19',
      endDate: '2021-04-20',
      employee: 'nguyễn tấn đại',
      customer: 'nguyễn thị liễu',
      facility: 'home',
      deposit: 5000,
      total: 90000
    }, {
      id: 5,
      starDate: '2021-04-19',
      endDate: '2021-04-20',
      employee: 'nguyễn tấn đại',
      customer: 'nguyễn thị liễu',
      facility: 'room',
      deposit: 5000,
      total: 100000
    }, {
      id: 6,
      starDate: '2021-04-19',
      endDate: '2021-04-20',
      employee: 'nguyễn tấn đại',
      customer: 'nguyễn thị liễu',
      facility: 'home',
      deposit: 4000,
      total: 110000
    }
  ];

  constructor() {
  }

  getAll() {
    return this.contract;
  }
}
