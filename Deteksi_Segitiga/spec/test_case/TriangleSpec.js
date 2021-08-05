const detectTriangle = require('../../src/scripts/Triangle');

describe('Guess the triangle', () => {
    it('Should fail if the sides are less than 1', () => {
      expect(() => detectTriangle(-1, 2, 2)).toThrowError('Strange Triangle');
      expect(() => detectTriangle(1, -2, 2)).toThrowError('Strange Triangle');
      expect(() => detectTriangle(1, 2, -2)).toThrowError('Strange Triangle');
    });
    it('Should fail if sides arent integer', () => {
      expect(() => detectTriangle('a', 1, 2)).toThrowError('Sides Have to be Integer');
      expect(() => detectTriangle(1, 'a', 2)).toThrowError('Sides Have to be Integer');
      expect(() => detectTriangle(1, 2, '3')).toThrowError('Sides Have to be Integer');
      expect(() => detectTriangle(1, 2, ' ')).toThrowError('Sides Have to be Integer');
    });
    it('Should fail if detech triangle inequality', ()=>{
        expect(()=> detectTriangle(1,2,4)).toThrowError('Triangle doesnt conform inequality principle')
      expect(()=> detectTriangle(2,20,4)).toThrowError('Triangle doesnt conform inequality principle')
        expect(()=> detectTriangle(40,1,4)).toThrowError('Triangle doesnt conform inequality principle')
    });
    it('Should detect Equilateral Triangle if all sides are equal', () => {
      expect(detectTriangle(1, 1, 1))
        .toEqual('Equilateral Triangle');
      expect(detectTriangle(1, 2, 2)).not.toEqual('Equilateral Triangle');
    });
    it('Should detect Isosceles Triangle iff two side are equal', () => {
      expect(detectTriangle(1, 1, 2)).toEqual('Isosceles Triangle');
      expect(detectTriangle(2, 1, 2)).toEqual('Isosceles Triangle');
      expect(detectTriangle(1,2,2)).toEqual('Isosceles Triangle');
    });
    it('Should detecct Scalane Triangle if no sides are the same', ()=>{
        expect(detectTriangle(1,2,3)).toEqual('Scalane Triangle');
    });
    
  
  
  })
  