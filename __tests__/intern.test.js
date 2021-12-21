const Intern = require("../lib/Intern")
test("Can get name via get name", () =>{
    const testvalue = "Karla"
    const e = new Intern(testvalue)
    expect(e.getname()).toBe(testvalue)
})