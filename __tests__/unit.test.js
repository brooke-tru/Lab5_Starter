// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("Expects 123-456-7890 to be true", () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test("Expects (123) 456-7890 to be true", () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test("Expects 1234567890 to be false", () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test("Expects (123)-(456)-(7890) to be false", () => {
  expect(isPhoneNumber('(123)-(456)-(7890)')).toBe(false);
});

test("Expects bmtruong@ucsd.edu to be true", () => {
  expect(isEmail('bmtruong@ucsd.edu')).toBe(true);
});
test("Expects brooketruong@gmail.com to be true", () => {
  expect(isEmail('brooketruong@gmail.com')).toBe(true);
});
test("Expects bmtruong.edu to be false", () => {
  expect(isEmail('bmtruong.edu')).toBe(false);
});
test("Expects brooketruong@gmail to be false", () => {
  expect(isEmail('brooketruong@gmail')).toBe(false);
});

test("Expects bruh to be true", () => {
  expect(isStrongPassword('bruh')).toBe(true);
});
test("Expects b1r2u3h4 to be true", () => {
  expect(isStrongPassword('b1r2u3h4')).toBe(true);
});
test("Expects bru to be false", () => {
  expect(isStrongPassword('bru')).toBe(false);
});
test("Expects 1b2r3u4h to be false", () => {
  expect(isStrongPassword('1b2r3u4h')).toBe(false);
});


test("Expects 05/04/2024 to be true", () => {
  expect(isDate('05/04/2024')).toBe(true);
});
test("Expects 5/4/2024 to be true", () => {
  expect(isDate('5/4/2024')).toBe(true);
});
test("Expects 05/04/24 to be false", () => {
  expect(isDate('05/04/24')).toBe(false);
});
test("Expects 5/4/24 to be false", () => {
  expect(isDate('5/4/24')).toBe(false);
});


test("Expects FFFFFF to be true", () => {
  expect(isHexColor('FFFFFF')).toBe(true);
});
test("Expects #FF5733 to be true", () => {
  expect(isHexColor('#FF5733')).toBe(true);
});
test("Expects FFFFFFF to be false", () => {
  expect(isHexColor('FFFFFFF')).toBe(false);
});
test("Expects FFF34 to be false", () => {
  expect(isHexColor('FFF34')).toBe(false);
});
