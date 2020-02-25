'use strict';

class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({ maxSpeed, price }) {
    this._maxSpeed = maxSpeed;
    this._speed = 0;
    this._isOn = false;
    this._distance = 0;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    if (this._speed + value >= this._maxSpeed) {
      this._speed = this._maxSpeed;
    } else {
      this._speed += value;
    }
  }

  decelerate(value) {
    if (this._speed - value > 0) {
      this._speed -= value;
    } else {
      this._speed = 0;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
