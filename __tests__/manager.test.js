const Manager = require("../lib/Manager")
test("Can get name via get name", () =>{
    const testvalue = "Karla"
    const e = new Manager(testvalue)
    expect(e.getname()).toBe(testvalue)
})