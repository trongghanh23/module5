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
    image: 'https://pix10.agoda.net/hotelImages/463/463255/463255_17010415020050117322.jpg?ca=6&ce=1&s=1024x768',
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
    image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Bathroom-1047x563.jpg',
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
    image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Bathroom-1047x563.jpg',
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
    image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Bathroom-1047x563.jpg',
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
    id: 5,
    name: 'Two room',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Bathroom-1047x563.jpg',
    area: 200,
    cost: 400000,
    maxPeople: 5,
    rentType: 'Day',
    facilityType: 'Villa',
    standardRoom: 'Vip',
    description: 'có xe máy ',
    poolArea: 30,
    numberFloors: 5,
    facilityFree: 'buffer'
  }, {
    id: 6,
    name: 'Two room',
    image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas_Bathroom-1047x563.jpg',
    area: 200,
    cost: 400000,
    maxPeople: 5,
    rentType: 'Day',
    facilityType: 'House',
    standardRoom: 'Vip',
    description: 'có xe máy ',
    poolArea: 40,
    numberFloors: 4,
    facilityFree: 'buffer'
  }
  ];
  getAll() {
    return this.facility;
  }
}
