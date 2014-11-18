//= require vendor/jquery
//= require foundation.min
//= require_tree .


$(document).ready(function(){
  $(document).foundation();

  $('body').on('click', 'table .sort', function(){
    $(this).toggleClass('desc')
  })

  $( "input.calendar" ).datepicker();
})

