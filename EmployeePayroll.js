class EmployeePayroll{
    id;
    name;
    gender;
    salary;
    startDate;

    constructor(...args){
        this.id = args[0]
        this.name = args[1]
        this.gender = args[2]
        this.salary = args[3]
        this.startDate = args[4]
    }


    get id(){return this.id}
    get name(){return this.name}
    get salary(){return this.salary}

    set name(name){this.name = name}
    set salary(salary){this.salary = salary}

    toString(){
        if(this.gender == undefined || this.startDate == undefined)
            return "id = "+this.id+", name = "+this.name+", salary = "+this.salary;
        else
            return "id = "+this.id+", name = "+this.name+", gender = "+this.gender+", salary = "+this.salary+", start Date = "+this.startDate;
    }
}

let employee = new EmployeePayroll(1,"Rajat",50000)
let employee2 = new EmployeePayroll(1,"Rajat G.L.",'M',30000,new Date())
console.log(employee.toString())
console.log(employee2.toString())