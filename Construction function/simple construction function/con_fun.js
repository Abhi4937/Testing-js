function my_constructor_fun(name, age){
    this.name=name;
    this.age=age;
    this.print= function printfunct(){
        console.log("I am "+ this.name+" and I am "+ this.age+" years old");
    }
}

confun= new my_constructor_fun("Abhishek",26);
confun.print();
