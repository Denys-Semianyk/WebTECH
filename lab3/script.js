const car1 = new Object();
car1.color = "red";
car1.maxSpeed = 63;
car1.driver = {
  name: "Сем'яник Денис",
  category: "C",
  personalLimitations: "No driving at night",
};
car1.tuning = true;
car1.numberOfAccidents = 0;

const car2 = {
  color: "blue",
  maxSpeed: 200,
  driver: {
    name: "Сем'яник Денис",
    category: "B",
    personalLimitations: null,
  },
  tuning: false,
  numberOfAccidents: 2,
};

car1.drive = function () {
  console.log("I am not driving at night");
};

car2.drive = function () {
  console.log("I can drive anytime");
};

car1.drive();
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
  this.driver = null;
  this.trip = function () {
    if (!this.driver) {
      console.log("No driver assigned.");
    } else {
      const { name, nightDriving, experience } = this.driver;
      const nightMsg = nightDriving ? "drives at night" : "does not drive at night";
      console.log(`Driver ${name} ${nightMsg} and has ${experience} years of experience.`);
    }
  };
}

Truck.AssignDriver = function (truck, name, nightDriving, experience) {
  truck.driver = { name, nightDriving, experience };
};

const truck1 = new Truck("yellow", 4000, 90, "MAN", "TGS");
const truck2 = new Truck("white", 3500, 80, "Volvo", "FH16");

Truck.AssignDriver(truck1, "Сем'яник Денис", true, 5);
Truck.AssignDriver(truck2, "Сем'яник Денис", false, 3);

truck1.trip();
truck2.trip();


class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("Square: all sides equal; perimeter = 4a; area = a^2");
  }

  length() {
    console.log(`Perimeter: ${4 * this.a}`);
  }

  square() {
    console.log(`Area: ${this.a * this.a}`);
  }

  info() {
    console.log(`Square info:
  - Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}
  - Angles: 90°, 90°, 90°, 90°
  - Perimeter: ${4 * this.a}
  - Area: ${this.a * this.a}`);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this._a = a;
    this._b = b;
  }

  get a() {
    return this._a;
  }

  set a(value) {
    this._a = value;
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  static help() {
    console.log(
      "Rectangle: opposite sides equal; 4 right angles; perimeter = 2*(a+b); area = a*b"
    );
  }

  length() {
    console.log(`Perimeter: ${2 * (this.a + this.b)}`);
  }

  square() {
    console.log(`Area: ${this.a * this.b}`);
  }

  info() {
    console.log(`Rectangle info:
  - Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}
  - Angles: 90°, 90°, 90°, 90°
  - Perimeter: ${2 * (this.a + this.b)}
  - Area: ${this.a * this.b}`);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Rhombus: all sides equal; opposite angles equal");
  }

  length() {
    console.log(`Perimeter: ${4 * this.a}`);
  }

  square() {
    console.log(`Area: ${this.a ** 2 * Math.sin((this.alpha * Math.PI) / 180)}`);
  }

  info() {
    console.log(`Rhombus info:
  - Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}
  - Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
  - Perimeter: ${4 * this.a}
  - Area: ${(this.a ** 2 * Math.sin((this.alpha * Math.PI) / 180)).toFixed(2)}`);
  }
}

class Parallelogram extends Rhombus {
  constructor(a, b, alpha, beta) {
    super(a, alpha, beta);
    this.b = b;
  }

  static help() {
    console.log("Parallelogram: opposite sides equal, opposite angles equal");
  }

  length() {
    console.log(`Perimeter: ${2 * (this.a + this.b)}`);
  }

  square() {
    console.log(`Area: ${this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)}`);
  }

  info() {
    console.log(`Parallelogram info:
  - Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}
  - Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
  - Perimeter: ${2 * (this.a + this.b)}
  - Area: ${(this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)).toFixed(2)}`);
  }
}

function Triangular({ a = 3, b = 4, c = 5 } = {}) {
  return { a, b, c };
}

const t1 = Triangular();
const t2 = Triangular({ a: 6, b: 8, c: 10 });
const t3 = Triangular({ a: 5, b: 5, c: 8 });

console.log("Triangular objects:");
console.log(`t1: a=${t1.a}, b=${t1.b}, c=${t1.c}`);
console.log(`t2: a=${t2.a}, b=${t2.b}, c=${t2.c}`);
console.log(`t3: a=${t3.a}, b=${t3.b}, c=${t3.c}`);


function PiMultiplier(k) {
  return function () {
    return Math.PI * k;
  };
}

const pm1 = PiMultiplier(2);
const pm2 = PiMultiplier(0.66);
const pm3 = PiMultiplier(0.5);

console.log(pm1(), pm2(), pm3());


function Painter(color) {
  return function (obj) {
    if (!obj.type) {
      console.log("No 'type' property occurred!");
    } else {
      console.log(`${color} ${obj.type}`);
    }
  };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const obj1 = { maxSpeed: 280, type: "Truck", color: "purple" };
const obj2 = { maxSpeed: 180, type: "Sportcar", color: "magenta" };
const obj3 = { avgSpeed: 90, loadCapacity: 2400, isCar: true };

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);

