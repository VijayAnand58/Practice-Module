//oops concepts
class person{
    constructor(_name,_age,_job){
        this.name=_name;
        this.age=_age;
        this.job = _job;
    }
    // welcome(){
    //     console.log(`Hello ${this.name}, His age is ${this.age}`);
    // }
}
let person1=new person('vijay',18);

//inheritance
class teacher extends person{
    constructor(_name,_age,_salary){
        super(_name,_age, "teacher");
        this.salary=_salary;
    }//inhriting data
    // inheriting method
    test(){
        super.welcome();
    }
}
let teacher1=new teacher('vijay',18,100000);

person.prototype.welcome=function(){
    console.log(`Hello ${this.name}`);
}
person1.welcome();
teacher1.test();