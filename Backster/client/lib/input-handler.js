Meteor.inputFunctions = {
  getUserInput: function(target) {
    var feet = 0;
    var inches = 0;
    var heightFeet = target.heightFeet.value;
    var heightInches = target.heightInches.value;
    var angleInput = target.angle.value;

    if(heightFeet == "0'") {
      feet = 0;
    } else if(heightFeet == "1'"){
      feet = 1;
    } else if(heightFeet == "2'"){
      feet = 2;
    } else if(heightFeet == "3'"){
      feet = 3;
    }else if(heightFeet == "4'"){
      feet = 4;
    } else if(heightFeet == "5'"){
      feet = 5;
    } else if(heightFeet == "6'"){
      feet = 6;
    } else if(heightFeet == "7'"){
      feet = 7;
    } else if(heightFeet == "8'"){
      feet = 8;
    } else if(heightFeet == "9'"){
      feet = 9;
    }

    if(heightInches == "0''") {
      inches = 0;
    } else if(heightInches == "1''"){
      inches = 1;
    } else if(heightInches == "2''"){
      inches = 2;
    } else if(heightInches == "3''"){
      inches = 3;
    }else if(heightInches == "4''"){
      inches = 4;
    } else if(heightInches == "5''"){
      inches = 5;
    } else if(heightInches == "6''"){
      inches = 6;
    } else if(heightInches == "7''"){
      inches = 7;
    } else if(heightInches == "8''"){
      inches = 8;
    } else if(heightInches == "9''"){
      inches = 9;
    } else if(heightInches == "10''"){
      inches = 10;
    } else if(heightInches == "11''"){
      inches = 11;
    }

      var userInput = {
        gender: target.gender.value,
        height: feet*12 + inches,
        weight: target.weightInput.value,
        load: target.loadInput.value,
        distance: target.distanceInput.value,
        angle: angleInput
      };

      return userInput;
  }
};
