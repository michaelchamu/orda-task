/// tests for the function to ensure it works correctly regardless of passed parameters
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;
const { sub } = require('../function/sub.function');
describe('Basic tests for sub() function', () => {
    it('should return error message if a non numeric value exists', () => {
        let result = sub('a', 3);
        result.should.be.false;
    });
    it('should return notification if no arguments are passed', () => {
        let result = sub();
        result.should.be.false;
    });
    it('should return result equal to argument if single argument is passed', () => {
        let result = sub(6);
        result.should.equal(6);
    });
    it('should return correct result if more than one argument is passed', () => {
        let result = sub(12, 4, 1);
        result.should.equal(7);
    });
    it('should accept decimal numbers', () => {
        let result = sub(12, 4.5, 1);
        result.should.equal(6.5);
    });
    it('should accept a single negative value', () => {
        let result = sub(12, -4, 1);
        result.should.equal(15);
    });
    it('should accept multiple negative values', () => {
        let result = sub(-12, 4, -1);
        result.should.equal(-15);
    });
});
