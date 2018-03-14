$(function () {
    $('#add').click(function() {
        if ($('#item').val() !== "") {
            $('#list').append('<li>' + $('#item').val() +  '</li>'); 
			$('#item').val('');
		}
    });

});