
/*Get the input from the user
Assumption: template_name = submitForm
*/
Template.body.events({
  'click .export-file': function(event, template) {
    var userInput = Meteor.inputFunctions.getUserInput(template.find('#input-form'));
    userInput.userBCF = Meteor.bcFunctions.calculateBCF(userInput);
    userInput.userBCS = Meteor.bcFunctions.calculateBCS(userInput);

    var nameFile = 'Backster.csv';

    var heading = true; // Optional, defaults to true
    var delimiter = ","; // Optional, defaults to ",";
    var fileContent = exportcsv.exportToCSV([userInput], heading, delimiter);
    var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    saveAs(blob, nameFile);
  },

  'submit #input-form': function(event) {
    event.preventDefault();

    var userInput = Meteor.inputFunctions.getUserInput(event.target);

    var userBCF = Meteor.bcFunctions.calculateBCF(userInput);
    var userBCS = Meteor.bcFunctions.calculateBCS(userInput);
	
	document.getElementById('displayBCF').innerHTML = userBCF.toFixed(2);
	document.getElementById('displayBCS').innerHTML = userBCS.toFixed(2);
  }
});