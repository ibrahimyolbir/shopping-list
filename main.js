$(function () {
    $('#add').click(function() {
        if ($('#item').val() !== "") {
            $('#list').append('<li style="border-bottom:1px solid #8faebc;"><span>' + $('#item').val() +  
            '</span><button class="item-button btn btn-xs btn-danger single-remove">Delete</button> <button class="btn btn-xs btn-primary done">Done</button></li>'); 
			$('#item').val('');
		}
    });
});

$('#list').on('click', '.single-remove', function() {		
    $(this).parent().hide(400, function(){
        $(this).remove();
    });		
});
$('#list').on('click','.done', function(){
    $(this).parent().css('background-color', 'green');  
});

