const person={
    name:"Divyanshu",
    age:23
}

function personInfo(){
    console.log(this.name +" " + this.age);
}

personInfo.call(person);