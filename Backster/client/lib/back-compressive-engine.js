function calculateBCF( userInput ) {
  var result1 = (calculateLoadMoment(userInput)
                + calculateBodyMoment(userInput))
                / calculateBMLA(userInput);
  var result2 = 0.48 * userInput.weight;

  return result1 + result2;
}

function calculateBCS( userInput ) {
  var bcf = calculateBCF(userInput);
  var ivda = calculateIVDA(userInput);

  if( ivda !== 0) {
    return bcf/ivda;
  } else {
    return -1;
  }
}

function calculateIVDA( userInput ) {
  var result = -16.959 + 0.179 * userInput.height * 2.54;

  if (userInput.gender === 'M') {
    result += 1.7;
  }

  result /= (2.54*2.54);

  return result;
}

function calculateLoadMoment( userInput ) {
  return userInput.load * userInput.handDistance;
}

function calculateBodyMoment( userInput ) {
  var result1 = Math.sin(userInput.backAngle * Math.PI / 180);
  var result2 = userInput.weight * 0.48;
  var result3 = userInput.height * 0.47 * 0.4;

  return result1 * result2 * result3;
}

function calculateBMLA( userInput ) {
  return 0.41850394 + 0.025 * userInput.height;
}

var submission = {
  gender: 'M',
  height: 69,
  weight: 180,
  load: 25,
  backAngle: 22.5,
  handDistance: 20
}

console.log("BCF: ", calculateBCF(submission));
console.log("BCS: ", calculateBCS(submission));
