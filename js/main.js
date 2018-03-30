// panel up/down icon

$('#collapseExample').on('shown.bs.collapse', function() {
    $(".servicedrop").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
  });

$('#collapseExample').on('hidden.bs.collapse', function() {
    $(".servicedrop").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  });
  
  
// Search select option

$(document).ready(function() {
    $('.nm-src-status').select2();
});

$(".nm-src-count").select2({
    placeholder: "="
});

// Data popover

$(function () {
  $('[data-toggle="popover"]').popover()
})