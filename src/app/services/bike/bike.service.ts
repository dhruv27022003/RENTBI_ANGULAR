import { Injectable } from '@angular/core';
import { bikes } from 'src/app/shared/models/bike';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor() {}

  getAllbikebyid(id: number): bikes {
  return this.getAll().find( bike => bike.id== id) !  ;
  }

  getAllbikebytag(tag: string): bikes[] {
    if (tag == 'ALL') return this.getAll();
    else return this.getAll().filter((bike) => bike.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'ALL', count: 15 },

      { name: 'BIKE', count: 9 },
      { name: 'CAR', count: 2 },
      { name: 'SCOOTAR', count: 4 },
      { name: 'SPORTS BIKE', count: 3 },
      { name: 'CRUIZER', count: 5 },
      { name: 'BULLET', count: 3 },
      { name: 'ELECTRIC', count: 1 },
    ];
  }

  getAll(): bikes[] {
    return [
      {
        id: 1,
        name: 'KTM 250',
        price: 1100,
        favourite: false,
        star: 4.5,
        tags: ['BIKE', 'KTM', 'SPORTS BIKE'],
        mileage: 40,
        url: '/assets/1.jpg',
      },
      {
        id: 2,
        name: 'BULLET ',
        price: 1200,
        favourite: false,
        star: 5,
        tags: ['CRUIZER', 'ROYAL ENFIELD', 'BIKE', 'BULLET'],
        mileage: 40,
        url: '/assets/19.jpeg',
      },

      {
        id: 3,
        name: 'SWIFT',
        price: 2350,
        favourite: false,
        star: 4,
        tags: ['CAR', 'SUZUKI', 'MARUTI'],
        mileage: 15,
        url: '/assets/10.jpeg',
      },
      {
        id: 4,
        name: 'ROYAL ENFEILD',
        price: 1300,
        favourite: false,
        star: 5,

        tags: ['CRUIZER', 'ROYAL ENFIELD', 'BIKE', 'BULLET'],
        mileage: 40,
        url: '/assets/13.jpeg',
      },
      {
        id: 5,
        name: 'SUZUKI ACCESS',
        price: 400,
        favourite: false,
        star: 2,
        tags: ['SUZUKI', 'SCOOTAR'],
        mileage: 50,
        url: '/assets/5.jpeg',
      },
      {
        id: 6,
        name: 'ACTIVA 6G',
        price: 700,
        favourite: false,
        star: 5,
        tags: ['HONDA', 'SCOOTAR', 'ACTIVA'],
        mileage: 30,
        url: '/assets/7.jpeg',
      },
      {
        id: 7,
        name: 'SWIFT',
        price: 2500,
        favourite: false,
        star: 5,
        tags: ['CAR', 'SUZUKI', 'MARUTI'],
        mileage: 10,
        url: '/assets/11.jpeg',
      },
      {
        id: 8,
        name: 'HONDA CBR',
        price: 800,
        favourite: false,
        star: 4,
        tags: ['CRUIZER', 'HONDA', 'BIKE'],
        mileage: 60,
        url: '/assets/9.jpg',
      },
      {
        id: 9,
        name: 'DUCATI ',
        price: 1500,
        favourite: false,
        star: 3,

        tags: ['BIKE', 'DUCATI', 'SPORTS BIKE'],
        mileage: 40,
        url: '/assets/8.jpg',
      },
      {
        id: 10,
        name: 'YAMAHA R15',
        price: 1500,
        favourite: false,
        star: 5,
        tags: ['BIKE', 'YAMAHA', 'SPORTS BIKE'],
        mileage: 40,
        url: '/assets/4.jpg',
      },
      {
        id: 11,
        name: 'ACTIVA 125',
        price: 600,
        favourite: false,
        star: 3,
        tags: ['HONDA', 'SCOOTAR', 'ACTIVA'],
        mileage: 70,
        url: '/assets/2.jpeg',
      },
      {
        id: 12,
        name: 'BAJAJ PULSAR',
        price: 650,
        favourite: false,
        star: 2,

        tags: ['BIKE', 'PULSAR'],
        mileage: 40,
        url: '/assets/12.jpeg',
      },
      {
        id: 13,
        name: 'RE BULLET',
        price: 1100,
        favourite: false,
        star: 3,

        tags: ['CRUIZER', 'ROYAL ENFIELD', 'BIKE', 'BULLET'],
        mileage: 20,
        url: '/assets/14.jpeg',
      },
      {
        id: 14,
        name: 'JAWA PERAK',
        price: 1600,
        favourite: false,
        star: 3,
        tags: ['CRUIZER', 'BIKE', 'JAWA'],
        mileage: 40,
        url: '/assets/15.jpeg',
      },
      {
        id: 15,
        name: 'HERO ELECTRIC',
        price: 400,
        favourite: false,
        star: 2,
        tags: ['HERO', 'ELECTRIC', 'SCOOTAR'],
        mileage: 40,
        url: '/assets/16.jpeg',
      },
    ];
  }
}
