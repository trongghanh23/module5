import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor() {
  }

  facility: Facility[] = [{
    id: 1,
    name: 'Beach room',
    area: 200,
    cost: 400000,
    maxPeople: 5,
    rentType: 'Day',
    facilityType: 'Villa',
    standardRoom: 'Vip',
    description: 'có hồ bơi',
    poolArea: 20,
    numberFloors: 3,
    facilityFree: 'buffer'
  }, {
    id: 2,
    name: 'Beach room',
    area: 200,
    cost: 400000,
    maxPeople: 5,
    rentType: 'Month',
    facilityType: 'Room',
    standardRoom: 'Vip',
    description: 'có xe máy ',
    poolArea: 20,
    numberFloors: 2,
    facilityFree: 'buffer'
  }, {
    id: 3,
    name: 'Beach room',
    area: 200,
    cost: 400000,
    maxPeople: 5,
    rentType: 'Month',
    facilityType: 'Room',
    standardRoom: 'Vip',
    description: 'có xe máy ',
    poolArea: 20,
    numberFloors: 2,
    facilityFree: 'buffer'
  }, {
    id: 4,
    name: 'Beach room',
    area: 200,
    cost: 400000,
    maxPeople: 5,
    rentType: 'Month',
    facilityType: 'Room',
    standardRoom: 'Vip',
    description: 'có xe máy ',
    poolArea: 20,
    numberFloors: 2,
    facilityFree: 'buffer'
  },
  ];
  getAll() {
    return this.facility;
  }
}
