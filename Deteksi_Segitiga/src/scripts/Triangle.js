const detectTriangle = (sideA, sideB, sideC) => {
    [sideA, sideB, sideC].forEach((side) => {
      if (Number.isInteger(side) != true) {
        throw new Error('Sides Have to be Integer');
      }
      if (side < 1) {
        throw new Error('Strange Triangle');
      }
  
    });
    if((sideA + sideB < sideC) || (sideA+sideC < sideB) || (sideB + sideC < sideA)){
        throw new Error('Triangle doesnt conform inequality principle');
    }
  
    if (sideA === sideB && sideA === sideC) {
      return 'Equilateral Triangle';
    }
    if ((sideA === sideB && sideA !== sideC) || (sideA === sideC && sideA !== sideB) || 
    (sideB === sideC && sideB !== sideA) ) {
      return 'Isosceles Triangle'
    }
    if((sideA !== sideB) && (sideB !== sideC)){
        return 'Scalane Triangle';
    }
  
  };
  
  module.exports = detectTriangle;