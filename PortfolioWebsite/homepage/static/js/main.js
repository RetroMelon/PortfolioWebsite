

$(document).ready(function(){
  var $container = $('.item-container');
  var $noitems = $('#noitems');
  var $invisiblesmoothscroll = $('#ninvisiblesmoothscroll');
  var lastheight = $container.height();

  //decides whether to display the "There are no items" text based on
  //how many items there are. also decides whether to animate the height
  //the invisible div, so we don't have an uncomfortable jerky motion
  function decideNoItems() {
    //getting number of items and deciding what to do.
    var numberofitems = $container.find(".active").size();
    console.log("no. items: " + numberofitems);

    //if the number of items is zero, show the message and smooth scroll
    if(numberofitems <= 0) {
      //showing the message
      $noitems.css("display", "block");
      
      //smoothscrolling
      //checking if height decreased, and by how much
      var newheight = $container.height();
      var heightdif = lastheight - newheight; //+ve if smaller, -ve if bigger
      console.log('newheight' + newheight + '  lastheight ' + lastheight);
      console.log('height dif ' + heightdif);

      if(heightdif > 0) {
        $('#invisiblesmoothscroll').height(heightdif);
        console.log("animating!");
        $('#invisiblesmoothscroll').animate({height: '1px'}, 550);
      }

    } else {
      $noitems.css("display", "none");
    }

    //setting the most recent height of the container
    lastheight = $container.height();
  }

  $container.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  }).isotopeSearchFilter();

  $container.isotope("on", "layoutComplete", decideNoItems);


  //the click listener for the filter buttons
  function filterClick(data){
    $(filters).css("opacity", 0.6);
    $(filters).css("background-color", "");
    $(data.target).css("opacity", 1);

    var filterText = "";

    if($(data.target).attr("class") == "btn") {
      $(filters[filters.length - 1]).val($(data.target).attr("filter"));
      $(data.target).css("background-color", "#346A6C"); //only set the bg-color if a button
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
