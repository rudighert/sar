//= require vendor/jquery
//= require foundation.min
//= require_tree .


$(document).ready(function(){
  $(document).foundation();

  $('body').on('click', 'table .sort', function(){
    $(this).toggleClass('desc')
  })

  $( "input.calendar" ).datepicker();

  $('body').on('click', '.block_input_icon', function(){
    $input = $(this).find('.calendar')
    $input.datepicker('show');
  })

})

