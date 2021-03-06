import functions from './syntax'

test('variable type', () => {
    expect(functions.variableType(1)).toBe("number");
    expect(functions.variableType("hello")).toBe("string");
    expect(functions.variableType(true)).toBe("boolean");
    expect(functions.variableType(NaN)).toBe("number");
    expect(functions.variableType()).toBe("undefined");
    expect(functions.variableType({'good': 'morning'})).toBe("object");

});

test('if/else', () => {
    expect(functions.ifElse(7)).toBe('low');
    expect(functions.ifElse(25)).toBe('high');
});

test('add to front', () => {
    expect(functions.addToFront(7, [2, 4, 't' ])).toStrictEqual([7, 2, 4, 't']);
});

test('add to end', () => {
    expect(functions.addToEnd('r', [2, 5, 't'])).toStrictEqual([2, 5, 't', 'r']);
});

test('update value', () => {
    expect(functions.updateValues('q', 2, [1, 2, 3, 4, 5])).toStrictEqual([1, 2, 'q', 4, 5]);
});

test('for loop', () => {
    expect(functions.forLoop(7)).toBe(14);
});

test('for/in loop', () => {
    expect(functions.forInLoop({a:1, b:2, c:3, d:4})).toStrictEqual({a:2, b:3, c:4, d:5});
});

test('while loop', () => {
    expect(functions.whileLoop(5)).toBe(25);
});

test('do/while loop', () => {
    expect(functions.doWhileLoop(4)).toBe(24);
});

test('for each array', () => {
    expect(functions.forEachArrayLoop([ 'hi', 'hello', 'bonjour'])).toStrictEqual([ 'hi!', 'hello!', 'bonjour!']);
});

test('object look up', () => {
    expect(functions.objectLookUp({a:1, b:2, c:3}, 'b')).toBe(2);
});







// import functions from './functions'

// test('Check the sizes', () => {
//     expect(functions.size(-1)).toBe("small"); // Consider the edge cases
//     expect(functions.size(0)).toBe("small");
//     expect(functions.size(10)).toBe("medium");
//     expect(functions.size(15)).toBe("medium");
//     expect(functions.size(20)).toBe("large");
//     expect(functions.size(2000000)).toBe("large");
// });

// test('Does that add function work?', () => {
//     expect(functions.add(1,2)).toBe(3);
//     expect(functions.add(101,202)).toBe(303);
// });