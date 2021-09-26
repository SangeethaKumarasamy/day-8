// 2.coverting uml diagram to class
// create a class circle
class Circle{
    // constructor with arguments to get radius , color
    constructor(radius, color){
        this.radius = radius
        this.color = color
    }
    // method to return a radius
    getRadius = () => this.radius
    
    //method to set radius
    setRadius(rad){
        this.radius = rad;
        console.log(`Radius of the circle is changed to ${rad}`)
    }
    //method to get Color
    getColor = () => this.color
    //method to  set color
    setColor(col){
        this.color = col
        console.log(`Color of the circle is changed to ${col}`)
    }
    //method to get a info of circle as string
    toString=()=>`circle[radius = ${this.radius}, color = ${this.color}]`
    //calculate area of circle
    getArea = () => Math.PI*(this.radius*this.radius)
    // calculate circumference of the circle
    
    getCircumference =() => 2 * Math.PI * this.radius
}
const redCircle = new Circle(2.4, "red")
// get the info of redCircle using methods of class Circle
console.log(`redCircle's Info \n Radius : ${redCircle.getRadius()} \n Color : ${redCircle.getColor()} \n Area : ${redCircle.getArea()} \n Circumference : ${redCircle.getCircumference()} \n`);
// set the color as blue
redCircle.setColor("blue")
//set thr radius as 3
redCircle.setRadius(3.0)
//getting the changed color and radius as string by toString method
console.log(redCircle.toString())


// 3.class person to hold details

class Person{
    constructor(props=[]){
  return props
    }
}

var me = new Person();
me.firstname = "Sangeetha";
me.lastname="Kumarasamy";
me.age = "26";
me.email="vpksangeetha@gmail.com";
me.country="India";


console.log(me);

