/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const result = input.slice(0, input.indexOf(input.match(/[a-zA-Z]/)))
    if(result.length == 0){
      return 1;
    }
    if(result.match(/[0-9]/) == null){
      return 'invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    const result = input.slice(input.indexOf(input.match(/[a-zA-Z]/)), input.length)
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit){
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'litres';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const zeroes = function(num){
      return Math.pow(10, num.toString().length - num.toString().indexOf('.') - 1)
    }
    
    const calc = function(init, unit){
      return init*zeroes(init) * unit*zeroes(unit) / (zeroes(init)*zeroes(unit))
    }
    
    let result;
    
    switch(initUnit){
      case 'mi':
        result = calc(initNum, miToKm)
        break;
      case 'km':
        result = initNum * 0.621371;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum * 2.20462;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum * 0.264172;
        break;
      default:
        return;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit)
    if(!returnNum){
      console.log(typeof returnNum)
      return 'Invalid unit'
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
