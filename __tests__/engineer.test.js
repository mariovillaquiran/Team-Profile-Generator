const Engineer = require("../lib/Engineer")
test("Can get name via get name", () =>{
    const testvalue = "Karla"
    const e = new Engineer(testvalue)
    expect(e.getname()).toBe(testvalue)
})