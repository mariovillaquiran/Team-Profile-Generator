const Employee = require("../lib/Employee")
test("Can get name via get name", () =>{
    const testvalue = "Karla"
    const e = new Employee(testvalue)
    expect(e.getname()).toBe(testvalue)
})