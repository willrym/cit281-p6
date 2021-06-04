/*
    CIT 281 Project 6

    Name: Will Mosher
*/
class Shape {
    constructor(sides){
        
        this.sides = sides;
    }
    perimeter = () => {return this.sides != null ? this.sides.reduce(function add(a, b){ return a + b; }) : 0;}
}

/* console.log(new Shape([5,10]).perimeter())
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0 */

class Rectangle extends Shape {
    constructor(length = 0, width = 0){
        super([length, length, width, width]);
        this.length = length;
        this.width = width;
    }
    area = () => {return this.length != null && this.width != null ? this.width * this.length: 0}
}
/* console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0 */

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area = () => {
        if (this.sideA != null && this.sideB != null && this.sideC != null) {
            let s = (this.sideA + this.sideB + this.sideC)/2;
            let areaOfTri = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
            return areaOfTri;
        } else {
            return 0
        }
    }
}
/* console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0 */

// Array of sides arrays
const arr = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const sides of arr) {
    let newObj = null;

    switch (sides.length){
        default:
            console.log(`Shape with ${sides.length} sides unsupported. You screwed up. Maybe take a JavaScript class or something.`)
        break;
    case 2:
        let width = sides[0];
        let length = sides[1];

        newObj = new Rectangle(length, width);
        let nameOfShape = length != width ? "Rectangle" : "Square";
        console.log(`${nameOfShape} has perimeter of ${newObj.perimeter()} and an area of ${newObj.area()}`);
        break;
    case 3:
        let sideA = sides[0];
        let sideB = sides[1];
        let sideC = sides[2];

        newObj = new Triangle(sideA, sideB, sideC);
        let nameOfShapeTri = "Triangle";
        console.log(`${nameOfShapeTri} has perimeter of ${newObj.perimeter()} and an area of ${newObj.area()}`);
    }
}