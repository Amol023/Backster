Meteor.myFunctions = {
  calculateBCF : function( userInput ) {
    var result1 = (calculateLoadMoment(userInput)
                  + calculateBodyMoment(userInput))
                  / calculateBMLA(userInput);
    var result2 = 0.48 * userInput.weight;

    return result1 + result2;
  },

  calculateBCS : function( userInput ) {
    var bcf = calculateBCF(userInput);
    var ivda = calculateIVDA(userInput);

    if( ivda !== 0) {
      return bcf/ivda;
    } else {
      return -1;
    }
  },

  calculateIVDA : function( userInput ) {
    var result = -16.959 + 0.179 * userInput.height * 2.54;

    if (userInput.gender === 'M') {
      result += 1.7;
    }

    result /= (2.54*2.54);

    return result;
  },

  calculateLoadMoment : function( userInput ) {
    return userInput.load * userInput.handDistance;
  },

  calculateBodyMoment : function( userInput ) {
    var result1 = Math.sin(userInput.backAngle * Math.PI / 180);
    var result2 = userInput.weight * 0.48;
    var result3 = userInput.height * 0.47 * 0.4;

    return result1 * result2 * result3;
  },

  calculateBMLA : function( userInput ) {
    return 0.41850394 + 0.025 * userInput.height;
  }
}
