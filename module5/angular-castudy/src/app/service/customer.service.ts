import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer [] = [{
    id: 1,
    name: 'Nguyễn thị hào',
    customerType: 'member',
    dateOfBirthday: '2020-12-12',
    gender: 'female',
    idCard: '09876544567',
    phoneNumber: '09876545678',
    email: 'hao@gmail.com.vn',
    address: 'quảng bình'
  }, {
    id: 2,
    name: 'Nguyễn thị thu',
    customerType: 'goal',
    dateOfBirthday: '2019-11-20',
    gender: 'female',
    idCard: '09876544567',
    phoneNumber: '09876545678',
    email: 'thu@gmail.com.vn',
    address: 'quảng bình'
  }, {
    id: 3,
    name: 'Nguyễn văn nam',
    customerType: 'member',
    dateOfBirthday: '2020-09-29',
    gender: 'male',
    idCard: '09876544567',
    phoneNumber: '09876545678',
    email: 'nam@gmail.com.vn',
    address: 'quảng nam'
  }, {
    id: 4,
    name: 'Nguyễn thị thao',
    customerType: 'member',
    dateOfBirthday: '2020-12-12',
    gender: 'female',
    idCard: '09876544567',
    phoneNumber: '09876545678',
    email: 'thao@gmail.com.vn',
    address: 'quảng ngãi'
  }, {
    id: 5,
    name: 'Nguyễn thị bình',
    customerType: 'goal',
    dateOfBirthday: '2020-10-12',
    gender: 'female',
    idCard: '09876544567',
    phoneNumber: '09876545678',
    email: 'bình@gmail.com.vn',
    address: 'nghệ an'
  }
  ];

  constructor() {
  }


  getAll() {
    return this.customer;
  }
}
