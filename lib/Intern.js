const Employee = require("./Employee")
class Intern extends Employee{
    constructor(name,id,email){
        super(name,email,id,school)
        this.school = school
    }
    getgithub(){
        return this.school
    }
    getrole(){
        return "Intern"    
    }
}
module.exports = Intern
