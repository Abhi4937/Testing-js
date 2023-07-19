function Person(nm, age){
    this.name=nm;
    this.age=age;
}
Person.prototype.sayHello=function (){
    console.log("This is a protype function");
};  
const person=new Person("Esha",25);
person.sayHello();