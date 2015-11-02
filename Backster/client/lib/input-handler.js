Meteor.inputFunctions = {
  getUserInput: function(target) {
    var userInput = {
      gender: target.gender.value,
      height: target.heightInput.value,
      weight: target.weightInput.value,
      load: target.loadInput.value,
      distance: target.distanceInput.value,
      angle: 0
    };

    return userInput;
  }
};
