const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UOF";
  const e = new Intern("Malik", 1, "Malik@fakemail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Malik", 1, "Malik@fakemail.com", "UOF");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UOF";
  const e = new Intern("Malik", 1, "Malik@fakemail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
