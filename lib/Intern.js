const Employee = require("./Employee")
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,school)
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
