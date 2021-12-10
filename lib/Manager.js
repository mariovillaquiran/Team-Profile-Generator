const Employee = require("./Employee")
class Manager extends Employee{
    constructor(name,id,email,officenumber){
        super(name,id,officenumber)
        this.officenumber = officenumber
    }
    getgithub(){
        return this.officenumber
    }
    getrole(){
        return "Manager"    
    }
}
module.exports = Manager
