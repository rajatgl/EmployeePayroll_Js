class EmployeePayroll{
    id;
    name;
    salary;

    constructor(id,name,salary){
        this.id = id
        this.name = name
        this.salary = salary
    }


    get id(){return this.id}
    get name(){return this.name}
    get salary(){return this.salary}

    set name(name){this.name = name}
    set salary(salary){this.salary = salary}

    toString(){
        return "id = "+this.id+", name = "+this.name+", salary = "+this.salary;
    }
}

let employee = new EmployeePayroll(1,"Rajat",50000)
console.log(employee.toString())