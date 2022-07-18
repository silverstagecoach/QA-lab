const {returnTwo, greeting, add} = require("./functions");

test("test for returnTwo function", () => {
    expect(returnTwo()).toBe(2)
})

test("test for greeting function", () => {
    expect(greeting('James')).toBe("Hello, James")
    expect(greeting('Jill')).toBe("Hello, Jill")
})

test("test for add function", () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})