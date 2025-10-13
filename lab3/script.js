var car1 = new Object();

car1.color = "red"; // довільний колір англійською
car1.maxSpeed = 90; // довільне ціле число
car1.driver = {
  name: "Сем'яник Денис", // твоє ім'я та прізвище
  category: "C",
  personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "blue", // довільний колір англійською
    maxSpeed: 180, // довільне ціле число
    driver: {
      name: "Сем'яник Денис", // твоє ім'я та прізвище
      category: "B",
      personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
  };
  
  car1.drive = function() {
    console.log("I am not driving at night");
  };
  
  // Демонстрація роботи:
  car1.drive();

  car2.drive = function() {
    console.log("I can drive anytime");
  };
  
  // Демонстрація роботи:
  car2.drive();

  function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
  
    // Метод trip (з 1.2.9) додамо сюди:
    this.trip = function() {
      if (!this.driver) {
        console.log("No driver assigned");
      } else {
        var msg = "Driver " + this.driver.name + " ";
        msg += this.driver.nightDriving ? "drives at night " : "does not drive at night ";
        msg += "and has " + this.driver.experience + " years of experience";
        console.log(msg);
      }
    };
  }

  Truck.AssignDriver = function(truckObj, name, nightDriving, experience) {
    truckObj.driver = {
      name: name,
      nightDriving: nightDriving,
      experience: experience
    };
  };

var truck1 = new Truck("green", 5000, 80.5, "Renault", "Magnum");
var truck2 = new Truck("yellow", 4500, 75.2, "Scania", "R500");

// Присвоюємо водіїв
Truck.AssignDriver(truck1, "Іван Іванов", true, 10);
Truck.AssignDriver(truck2, "Петро Петров", false, 5);

// Демонстрація роботи методу trip:
truck1.trip();
truck2.trip();


class Square {
    constructor(a) {
      this.a = a; // сторона квадрата
    }
  
    static help() {
      console.log("Square: all sides equal; 4 right angles; perimeter = 4 * a; area = a^2");
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
      this.b = b; // ширина прямокутника
    }
  
    static help() {
      console.log("Rectangle: opposite sides equal; 4 right angles; perimeter = 2*(a+b); area = a*b");
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
      this.alpha = alpha; // тупий кут
      this.beta = beta;   // гострий кут
    }
  
    static help() {
      console.log("Rhombus: all sides equal; opposite angles equal; perimeter = 4 * a; area = a^2 * sin(alpha)");
    }
  
    length() {
      console.log(`Perimeter: ${4 * this.a}`);
    }
  
    square() {
      const radians = (deg) => (deg * Math.PI) / 180;
      console.log(`Area: ${(this.a ** 2) * Math.sin(radians(this.alpha))}`);
    }
  
    info() {
      console.log(`Rhombus info:
  - Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}
  - Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
  - Perimeter: ${4 * this.a}
  - Area: ${(this.a ** 2) * Math.sin((this.alpha * Math.PI) / 180)}`);
    }
  }

  

  class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
      super(a, alpha, beta);
      this.b = b;
    }
  
    static help() {
      console.log("Parallelogram: opposite sides equal; opposite angles equal; perimeter = 2*(a+b); area = a*b*sin(alpha)");
    }
  
    length() {
      console.log(`Perimeter: ${2 * (this.a + this.b)}`);
    }
  
    square() {
      const radians = (deg) => (deg * Math.PI) / 180;
      console.log(`Area: ${this.a * this.b * Math.sin(radians(this.alpha))}`);
    }
  
    info() {
      console.log(`Parallelogram info:
  - Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}
  - Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
  - Perimeter: ${2 * (this.a + this.b)}
  - Area: ${this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)}`);
    }
  }

  
  class RectangleWithAccessors extends Square {
    constructor(a, b) {
      super(a);
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
      console.log("Rectangle with getters/setters: opposite sides equal; 4 right angles; perimeter = 2*(a+b); area = a*b");
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

  
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const sq = new Square(5);
const rect = new Rectangle(6, 3);
const rhomb = new Rhombus(4, 120, 60);
const para = new Parallelogram(7, 4, 110, 70);

sq.info();
rect.info();
rhomb.info();
para.info();

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
  }

  const triangle1 = Triangular(); // за замовчуванням (3, 4, 5)
  const triangle2 = Triangular(6, 8, 10); // інші значення
  const triangle3 = Triangular(5, 12, 13); // інші значення
  
  console.log(triangle1);
  console.log(triangle2);
  console.log(triangle3);

  function PiMultiplier(multiplier) {
    return function() {
      return Math.PI * multiplier;
    };
  }

const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiBy3 = PiMultiplier(3);
const dividePiBy2 = PiMultiplier(0.5);

console.log(multiplyPiBy2()); // Множить на 2
console.log(multiplyPiBy3()); // Множить на 3
console.log(dividePiBy2());   // Ділить на 2


function Painter(color) {
    return function(obj) {
      if (obj.hasOwnProperty('type')) {
        console.log(`${color}: ${obj.type}`);
      } else {
        console.log("No 'type' property occurred!");
      }
    };
  }

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const obj1 = { maxSpeed: 280, type: "Truck", loadCapacity: 2400 };
const obj2 = { maxSpeed: 180, type: "Sportcar", color: "magenta" };
const obj3 = { avgSpeed: 90, isCar: true, color: "purple" };

// Демонстрація роботи функцій
PaintBlue(obj1);   // Blue: Truck
PaintRed(obj2);    // Red: Sportcar
PaintYellow(obj3); // No 'type' property occurred!
