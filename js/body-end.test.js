const {
    formatTelephoneNumber,
    makeTelephoneNumberSimplest,
} = require('./body-end');

let testName;
const getAssertMessage = (msg) => {
    const result = `${testName} ${count++}${msg ? `: ${msg}` : ''}`;
    previousTestName = testName;
    return result;
}
const newTest = (name) => {
    testName = name;
    count = 1;
}
const equal = (a, b) => console.assert(a === b, getAssertMessage(`${a} === ${b}`));
const notEqual = (a, b) => console.assert(a !== b, getAssertMessage(`${a} !== ${b}`));

newTest('makeTelephoneNumberSimplest()');
equal(
    makeTelephoneNumberSimplest('+7 999 123-45-67').value,
    '79991234567'
);
equal(
    makeTelephoneNumberSimplest('+7 999 123-45-67', [4]).countOfDeletedSymbol[4],
    2
);
notEqual(
    makeTelephoneNumberSimplest('+7 999 123-45-67', [4]).countOfDeletedSymbol[4],
    3
);

newTest('formatTelephoneNumber()');
equal(
    formatTelephoneNumber('79991234567').value,
    '+7 999 123-45-67'
);
equal(
    formatTelephoneNumber('+7_999 ignore_it 123 45-67').value,
    '+7 999 123-45-67'
);
equal(
    formatTelephoneNumber('7999').value,
    '+7 999 ___-__-__'
);
equal(
    formatTelephoneNumber('79').value,
    '+7 9__ ___-__-__'
);
