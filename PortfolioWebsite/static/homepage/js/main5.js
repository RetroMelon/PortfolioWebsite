

$(document).ready(function(){
  var $container = $('.item-container')

  $container.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  }).isotopeSearchFilter();
})
