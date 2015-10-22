if (Meteor.isClient) {
/*Get the input from the user 
Assumption: template_name = submitForm
*/
Template.submitForm.events({
	'click .my-button': function(event) {
		var inputHieght = $(event.target).find('[id=hieght]').val();
		var inputWieght = $(event.target).find('[id=wieght]').val();
		var inputAge = $(event.target).find('[id=age]').val();
		var inputBCS = $(event.target).find('[id=bcs]').val();
		/* TODO Add more input from UI to variables*/
	}

});
//Validate the input values

//create an output csv file

//Insert the data inside the file and close it.

//Initiate the download process.

}