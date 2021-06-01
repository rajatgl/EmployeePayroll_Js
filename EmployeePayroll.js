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
    get id(){return this._id}
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
    get salary(){return this._salary}
    set salary(salary){
        const SALARY_REGEX = /^[1-9]+[0-9]*(\.[0-9]+)?/
        if(SALARY_REGEX.test(salary))
            this._salary = salary
        else
            throw "Invalid salary"
    }
    //regex check gender
    get gender(){return this._gender}
    set gender(gender){
        const GENDER_REGEX = /^[F/M/undefined]{1}/
        if(GENDER_REGEX.test(gender))
            this._gender = gender
        else
            throw "Invalid gender" 
    }
    //invalidate future dates
    get startDate(){return this._startDate}
    set startDate(startDate){
        const currentDate = new Date()
        const date = new Date(startDate)
        if(date<=currentDate || startDate == undefined){
            this._startDate = startDate
            return;
        }
        else
            throw "Invalid Date"
    }


    toString(){
        if(this.gender == undefined && this.startDate == undefined)
            return "id = "+this.id+", name = "+this.name+", salary = "+this.salary;
        else{
            return "id = "+this.id+", name = "+this.name+", salary = "+this.salary+", gender = "+this.gender+", start Date = "+this.startDate.toLocaleDateString("en-IN");
        }
    }
}


try{
    let employee = new EmployeePayroll(2,"Rajat",50000)
    console.log(employee.toString())
}catch(e){
    console.error(e)
}

try{
    let employee2 = new EmployeePayroll(2,"Rajat",30000.00,'M',new Date())
    console.log(employee2.toString())
}catch(e){
    console.error(e)
}