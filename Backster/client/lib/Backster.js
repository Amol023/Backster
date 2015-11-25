
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

  'click .right.carousel-control': function(event) {
    var active = $('.carousel-inner .active');
    try {
      var alt = active[0].nextElementSibling.children[0].alt;
    } catch (err) {
      // wrapped around
      alt = $('.carousel-inner')[0].firstElementChild.children[0].alt;
    }

    document.getElementById('input-angle').value = alt;
  },

  'click .left.carousel-control': function(event) {
    var active = $('.carousel-inner .active');
    var alt = "0";
    try {
      alt = active[0].previousElementSibling.children[0].alt;
    } catch (err) {
      // wrapped around
      alt = $('.carousel-inner')[0].lastElementChild.children[0].alt;
    }

    document.getElementById('input-angle').value = alt;
  },

  'submit #input-form': function(event) {
    event.preventDefault();

    var userInput = Meteor.inputFunctions.getUserInput(event.target);

    var userBCF = Meteor.bcFunctions.calculateBCF(userInput);
    var userBCS = Meteor.bcFunctions.calculateBCS(userInput);

    document.getElementById('displayBCF').innerHTML = userBCF.toFixed(2);
    document.getElementById('displayBCS').innerHTML = userBCS.toFixed(2);
	
	if(userBCF < 386) {
		document.getElementById('bcf-rectangle1').style.display = "block";
		document.getElementById('bcf-rectangle2').style.display = "none";
		document.getElementById('bcf-rectangle3').style.display = "none";
		document.getElementById('bcf-rectangle4').style.display = "none";
		document.getElementById('bcf-rectangle5').style.display = "none";
		document.getElementById('bcf-rectangle6').style.display = "none";
	}else if(userBCF < 771) {
		document.getElementById('bcf-rectangle1').style.display = "none";
		document.getElementById('bcf-rectangle2').style.display = "block";
		document.getElementById('bcf-rectangle3').style.display = "none";
		document.getElementById('bcf-rectangle4').style.display = "none";
		document.getElementById('bcf-rectangle5').style.display = "none";
		document.getElementById('bcf-rectangle6').style.display = "none";
	}else if(userBCF < 1101) {
		document.getElementById('bcf-rectangle1').style.display = "none";
		document.getElementById('bcf-rectangle2').style.display = "none";
		document.getElementById('bcf-rectangle3').style.display = "block";
		document.getElementById('bcf-rectangle4').style.display = "none";
		document.getElementById('bcf-rectangle5').style.display = "none";
		document.getElementById('bcf-rectangle6').style.display = "none";
	}else if(userBCF < 1431) {
		document.getElementById('bcf-rectangle1').style.display = "none";
		document.getElementById('bcf-rectangle2').style.display = "none";
		document.getElementById('bcf-rectangle3').style.display = "none";
		document.getElementById('bcf-rectangle4').style.display = "block";
		document.getElementById('bcf-rectangle5').style.display = "none";
		document.getElementById('bcf-rectangle6').style.display = "none";
	}else if(userBCF < 2001) {
		document.getElementById('bcf-rectangle1').style.display = "none";
		document.getElementById('bcf-rectangle2').style.display = "none";
		document.getElementById('bcf-rectangle3').style.display = "none";
		document.getElementById('bcf-rectangle4').style.display = "none";
		document.getElementById('bcf-rectangle5').style.display = "block";
		document.getElementById('bcf-rectangle6').style.display = "none";
	}else {
		document.getElementById('bcf-rectangle1').style.display = "none";
		document.getElementById('bcf-rectangle2').style.display = "none";
		document.getElementById('bcf-rectangle3').style.display = "none";
		document.getElementById('bcf-rectangle4').style.display = "none";
		document.getElementById('bcf-rectangle5').style.display = "none";
		document.getElementById('bcf-rectangle6').style.display = "block";
	}
	
	
	
	
	if(userBCS < 201) {
		document.getElementById('bcs-rectangle1').style.display = "block";
		document.getElementById('bcs-rectangle2').style.display = "none";
		document.getElementById('bcs-rectangle3').style.display = "none";
		document.getElementById('bcs-rectangle4').style.display = "none";
		document.getElementById('bcs-rectangle5').style.display = "none";
		document.getElementById('bcs-rectangle6').style.display = "none";
	}else if(userBCS < 401) {
		document.getElementById('bcs-rectangle1').style.display = "none";
		document.getElementById('bcs-rectangle2').style.display = "block";
		document.getElementById('bcs-rectangle3').style.display = "none";
		document.getElementById('bcs-rectangle4').style.display = "none";
		document.getElementById('bcs-rectangle5').style.display = "none";
		document.getElementById('bcs-rectangle6').style.display = "none";
	}else if(userBCS < 576) {
		document.getElementById('bcs-rectangle1').style.display = "none";
		document.getElementById('bcs-rectangle2').style.display = "none";
		document.getElementById('bcs-rectangle3').style.display = "block";
		document.getElementById('bcs-rectangle4').style.display = "none";
		document.getElementById('bcs-rectangle5').style.display = "none";
		document.getElementById('bcs-rectangle6').style.display = "none";
	}else if(userBCS < 751) {
		document.getElementById('bcs-rectangle1').style.display = "none";
		document.getElementById('bcs-rectangle2').style.display = "none";
		document.getElementById('bcs-rectangle3').style.display = "none";
		document.getElementById('bcs-rectangle4').style.display = "block";
		document.getElementById('bcs-rectangle5').style.display = "none";
		document.getElementById('bcs-rectangle6').style.display = "none";
	}else if(userBCS < 1001) {
		document.getElementById('bcs-rectangle1').style.display = "none";
		document.getElementById('bcs-rectangle2').style.display = "none";
		document.getElementById('bcs-rectangle3').style.display = "none";
		document.getElementById('bcs-rectangle4').style.display = "none";
		document.getElementById('bcs-rectangle5').style.display = "block";
		document.getElementById('bcs-rectangle6').style.display = "none";
	}else {
		document.getElementById('bcs-rectangle1').style.display = "none";
		document.getElementById('bcs-rectangle2').style.display = "none";
		document.getElementById('bcs-rectangle3').style.display = "none";
		document.getElementById('bcs-rectangle4').style.display = "none";
		document.getElementById('bcs-rectangle5').style.display = "none";
		document.getElementById('bcs-rectangle6').style.display = "block";
	}
  }
});
