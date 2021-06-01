class EmployeePayroll{
    id;
    gender;
    salary;
    startDate;

    constructor(...args){
        this.id = args[0]
        this.name = args[1]
        this.salary = args[2]
        this.gender = args[3]
        this.startDate = args[4]
    }


    get name(){return this._name}
    set name(name)
    {   
        let nameRegex = /^[A-Z]{1}[a-z]{3,}$/
        if(nameRegex.test(name)){
            this._name = name
            return
        }
        else throw "Pattern mismatch"
    }

    toString(){
        if(this.gender == undefined || this.startDate == undefined)
            return "id = "+this.id+", name = "+this.name+", salary = "+this.salary;
        else
            return "id = "+this.id+", name = "+this.name+", salary = "+this.salary+", gender = "+this.gender+", start Date = "+this.startDate;
    }
}

let employee = new EmployeePayroll(1,"Rajat",50000)
console.log(employee.toString())
try{
    employee.name = "ajath"
    console.log(employee.toString())
}catch(e){
    console.error(e)
}

try{
    let employee2 = new EmployeePayroll(2,"Rajat",'M',30000,new Date())
    console.log(employee2.toString())
}catch(e){
    console.error(e)
}