var _calculateBCF = function( userInput ) {
  var result1 = (_calculateLoadMoment(userInput)
                + _calculateBodyMoment(userInput))
                / _calculateBMLA(userInput);
  var result2 = 0.48 * userInput.weight;

  return result1 + result2;
};

var _calculateBCS = function( userInput ) {
  var bcf = _calculateBCF(userInput);
  var ivda = _calculateIVDA(userInput);

  if( ivda !== 0) {
    return bcf/ivda;
  } else {
    return -1;
  }
};

var _calculateLoadMoment = function( userInput ) {
  return userInput.load * userInput.distance;
};

var _calculateBodyMoment = function( userInput ) {
  var result1 = Math.sin(userInput.angle * Math.PI / 180);
  var result2 = userInput.weight * 0.48;
  var result3 = userInput.height * 0.47 * 0.4;

  return result1 * result2 * result3;
};

var _calculateBMLA = function( userInput ) {
  return 0.41850394 + 0.025 * userInput.height;
};

var _calculateIVDA = function( userInput ) {
  var result = -16.959 + 0.179 * userInput.height * 2.54;

  if (userInput.gender === 'male') {
    result += 1.7;
  }

  result /= (2.54*2.54);
  
  return result;
};

Meteor.bcFunctions = {
  calculateBCF : _calculateBCF,
  calculateBCS : _calculateBCS,
  calculateIVDA : _calculateIVDA,
  calculateLoadMoment : _calculateLoadMoment,
  calculateBodyMoment : _calculateBodyMoment,
  calculateBMLA : _calculateBMLA
};
