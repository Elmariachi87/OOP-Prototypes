const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

let bmwSpeed = bmw.speed;
let mercedesSpeed = mercedes.speed;

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

bmw.accelerate();
bmw.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();

console.log(bmw);
console.log(mercedes);
