if (Meteor.isClient) {
	csvData = new Mongo.Collection(null);
/*Get the input from the user 
Assumption: template_name = submitForm
*/
Template.main.events({
	'click .export-csv': function(event, tmpl) {
		var name = tmpl.find('.name').value;
		var age = tmpl.find('.age').value;
		var hieght = tmpl.find('.hieght').value;
		var weight = tmpl.find('.weight').value;
		var bcs = tmpl.find('.bcs').value;
		var bcf = tmpl.find('.bcf').value;
		csvData.insert({name:name, 
			age:age, 
			hieght:hieght, 
			weight:weight,
			bcs:bcs, 
			bcf:bcf});
		/* TODO Add more input from UI to variables*/
	}

});
Template.main.events({
  'click .export-file': function(event) {
    var nameFile = 'Backster.csv';
    csvcount = csvData.find().count();
    console.log(csvcount);
    var id = csvData.find().fetch()[csvcount - 1]._id;
    var collection = csvData.find(id).fetch();
  	console.log(collection);
  	var heading = true; // Optional, defaults to true
  	var delimiter = "," // Optional, defaults to ",";
  	var fileContent = exportcsv.exportToCSV(collection, heading, delimiter);
  	var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    saveAs(blob, nameFile);
   }
});


}