Meteor.startup(function () {
	$('.inputValidate').keypress(function(eve) {
  if ( ( (eve.which != 46 || $(this).val().indexOf('.') != -1) && (eve.which < 48 || eve.which > 57) ) || (eve.which == 46 && $(this).caret().start == 0) ) {
    eve.preventDefault();
  }
     
 $('.inputValidate').keyup(function(eve) {
  if($(this).val().indexOf('.') == 0) {    $(this).val($(this).val().substring(1));
  }
 });
})

 .on("paste",function(eve){
	eve.preventDefault();
  });
  
      $('form > div > div > input').keyup(function() {

        var isEmpty = false;
        $('form > div > div > input').each(function() {
            if ($(this).val() == '') {
                isEmpty = true;
            }
        });

        if (isEmpty) {
            $('#submitButton').attr('disabled', 'disabled');
			$('#export-file').attr('disabled', 'disabled');
        } else {
            $('#submitButton').removeAttr('disabled');
			$('#export-file').removeAttr('disabled');
        }
    });
  
});