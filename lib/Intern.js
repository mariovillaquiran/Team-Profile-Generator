const Employee = require("./Employee")
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,email,id)
        this.school = school
    }
    getschool(){
        return this.school
    }
    getrole(){
        return "Intern"    
    }
}
module.exports = Intern
