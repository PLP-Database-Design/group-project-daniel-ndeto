const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Tests', () => {

  // Testing addition
  describe('add', () => {

    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add a negative and a positive number', () => {

      expect(add(-2, 3)).toBe(1);
    });

    test('should add two decimal numbers', () => {
      expect(add(2.5, 3.1)).toBeCloseTo(5.6);
    });
  });

  // Testing for subtraction
  describe('subtract', () => {

    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract a larger number from a smaller number', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    test('should subtract two decimal numbers', () => {
      expect(subtract(5.5, 3.2)).toBeCloseTo(2.3);
    });
  });

  // Tests multiplication
  describe('multiply', () => {

    test('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('should multiply a negative and a positive number', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });

    test('should multiply two decimal numbers', () => {
      expect(multiply(2.5, 4)).toBeCloseTo(10);
    });

    test('should return 0 when multiplying by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  // Testing divide
  describe('divide', () => {

    test('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('should divide a negative and a positive number', () => {
      expect(divide(-6, 3)).toBe(-2);
    });

    test('should divide two decimal numbers', () => {
      expect(divide(5.5, 2)).toBeCloseTo(2.75);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });
  });
});
