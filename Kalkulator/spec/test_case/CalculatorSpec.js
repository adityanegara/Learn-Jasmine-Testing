const calculate = require('../../src/scripts/Calculator');
describe('Calculate', ()=>{
    it('Should fail if the parameter is null', () =>{
        expect(()=> calculate(1,2)).toThrowError('Parameter Shouldnt be Null');
        expect(()=> calculate()).toThrowError('Parameter Shouldnt be Null');
        expect(()=> calculate(1)).toThrowError('Parameter Shouldnt be Null');
    });
    it('Should fail if the input wasnt an integer', ()=>{
        expect(()=> calculate('a', 2, '+')).toThrowError('Input Have to be an Integer');
        expect(()=> calculate(1, 'b', '+')).toThrowError('Input Have to be an Integer');
        expect(()=> calculate('a', 'b', '+')).toThrowError('Input Have to be an Integer');
    });
    it('Should fail if the input wasnt[+,-,*,/]', ()=>{
        expect(()=> calculate(1,2,'abc')).toThrowError('Operator Should Have been [+,-,*,/]');
    });
    it('Should correctly add input if operator is +', ()=>{
        expect(calculate(1, 2, '+')).toEqual(3);
        expect(calculate(10, 30, '+')).toEqual(40);
        expect(calculate(30, 40, '+')).toEqual(70);
    });
    it('Should correctly subtract input if operator is -', ()=>{
        expect(calculate(5, 2, '-')).toEqual(3);
        expect(calculate(30, 30, '-')).toEqual(0);
        expect(calculate(10, 40, '-')).toEqual(-30);
    });
    it('Should correctly multiply input if operator is *', ()=>{
        expect(calculate(5, 2, '*')).toEqual(10);
        expect(calculate(30, 30, '*')).toEqual(900);
        expect(calculate(10, 40, '*')).toEqual(400);
    });
    it('Should correctly divide input if operator is /', ()=>{
        expect(calculate(10, 2, '/')).toEqual(5);
        expect(calculate(100, 10, '/')).toEqual(10);
        expect(calculate(40, 40, '/')).toEqual(1);
    });
});