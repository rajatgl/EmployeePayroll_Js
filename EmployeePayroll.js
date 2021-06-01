class EmployeePayroll{
    
    constructor(...args){
        this.id = args[0]
        this.name = args[1]
        this.salary = args[2]
        this.gender = args[3]
        this.startDate = args[4]
    }


    get name(){return this._name}
    //UC13: regex check for name
    set name(name)
    {   
        const NAME_REGEX = /^[A-Z]{1}[a-z]{3,}$/
        if(NAME_REGEX.test(name)){
            this._name = name
            return
        }
        else throw "Invalid Name"
    }
    //UC14: regex check for id
    set id(id){
        const ID_REGEX = /^[1-9]+[0-9]*/
        if(ID_REGEX.test(id)){
            this._id = id
            return;
        }
        else
            throw "Invalid employeeId"
    }
    //UC14: regex check for salary
    set salary(salary){
        const SALARY_REGEX = /^[1-9]+[0-9]*(\.[0-9]+)?/
        if(SALARY_REGEX.test(salary))
            this._salary = salary
        else
            throw "Invalid salary"
    }
    //regex check gender
    set gender(gender){
        const GENDER_REGEX = /^[F/M/undefined]{1}/
        if(GENDER_REGEX.test(gender))
            this._gender = gender
        else
            throw "Invalid gender" 
    }


    toString(){
        if(this.gender == undefined && this.startDate == undefined)
            return "id = "+this.id+", name = "+this.name+", salary = "+this.salary;
        else{
            const options = {day:'numeric',month:'numeric',year:'numeric'}
            return "id = "+this.id+", name = "+this.name+", salary = "+this.salary+", gender = "+this.gender+", start Date = "+this.startDate.toLocaleDateString("en-IND",options);
        }
    }
}


try{
    let employee = new EmployeePayroll(2,"Rajat",50000.00)
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