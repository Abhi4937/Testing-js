const literal_obj={
    name:"Abhishek",
    age:26,
    print: ()=> console.log("this is object literal")
};
console.log(literal_obj.print());
console.log(literal_obj["print"]());
//Note the above log will also print undefined as the print function is not returing anything 
// To not get undefined after logging the print statement use return
//example

const literal_obj2={
    name:"Esha",
    age:25,
    print:()=>{return "This is new object literal that has return statement";}
};

console.log(literal_obj2.print());