

$(document).ready(function(){
  var $container = $('.item-container');
  var $noitems = $('#noitems');
  var displaynoitems = false;

  function decideNoItems() {
    var numberofitems = $container.find(".active").size();

    if(numberofitems <= 0) {
      $noitems.css("display", "block");
    } else {
      $noitems.css("display", "none");
    }
  }

  $container.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  }).isotopeSearchFilter();

  $container.isotope("on", "layoutComplete", decideNoItems);


  //the click listener for the filter buttons
  function filterClick(data){
    $(filters).css("opacity", 0.6);
    $(data.target).css("opacity", 1);

    var filterText = "";

    if($(data.target).attr("class") == "btn") {
      $(filters[filters.length - 1]).val($(data.target).attr("filter"));
    }

    $(filters[filters.length - 1]).trigger('keyup');
  }

  //getting all filters and storing them in a list
  filters = $( ".filter-list" ).find(".btn, .form-control");

  //Making the first ("ALL") filter opaque and the rest transparent
  $(filters).css("opacity", 0.6);
  $(filters[0]).css("opacity", 1);

  //adding the click listener function to them all
  $(filters).click(filterClick);


});
